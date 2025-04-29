import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  isEditing: boolean = false;
  firestore = inject(Firestore);
  user = this.authService.currentUser;

  fields = [
    { name: 'fullName', label: 'Full Name', placeholder: 'Enter your fullname' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'designation', label: 'Designation', placeholder: 'Enter your Designation' },
    { name: 'mobile', label: 'Mobile', placeholder: 'Enter your Mobile No.' },
    { name: 'about', label: 'About me', placeholder: 'Tell about yourself' },
    { name: 'skills', label: 'Skills', placeholder: 'Add your skills as separate texts. Ex. Python,Java' },
    { name: 'portfolio', label: 'Portfolio', placeholder: 'Enter URL of your portfolio' },
    { name: 'github', label: 'Github', placeholder: 'Enter URL of your github' },
    { name: 'linkedin', label: 'LinkedIn', placeholder: 'Enter URL of your linkedIn' },
    { name: 'instagram', label: 'Instagram', placeholder: '(Optional) Enter URL of you Instagram account' }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  async ngOnInit() {
    this.initForm();

    this.authService.user$.subscribe(async (user) => {
      if (user) {
        this.user = user;
        this.profileForm.patchValue({ email: user.email });

        const userRef = doc(this.firestore, `users/${user.uid}`);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          this.profileForm.patchValue(data);
        }
      }
    });
  }

  initForm() {
    this.profileForm = this.fb.group({
      email: [{ value: '', disabled: true }],
      fullName: [''],
      designation: [''],
      mobile: [''],
      about: [''],
      skills: [''],
      portfolio: [''],
      github: [''],
      linkedin: [''],
      instagram: ['']
    });
  }

  onEdit() {
    this.isEditing = true;
  }

  onCancel() {
    this.isEditing = false;
    this.profileForm.reset();
    this.profileForm.patchValue({ email: this.user?.email });
  }

  async onSave() {
    if (!this.profileForm.valid || !this.user) return;

    const userRef = doc(this.firestore, `users/${this.user.uid}`);
    const formData = this.profileForm.getRawValue();

    await setDoc(userRef, {
      ...formData,
      email: this.user.email,
      uid: this.user.uid
    }, { merge: true });

    this.isEditing = false;
  }
}
