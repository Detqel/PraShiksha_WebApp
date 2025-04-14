import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GoogleAuthProvider, Auth, createUserWithEmailAndPassword, AuthErrorCodes, signInWithPopup } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  authForm!: FormGroup;
    errMessage: string = '';

    googleAuthProvider = new GoogleAuthProvider();

    auth = inject(Auth);

    constructor(private router: Router) { this.initForm(); }

    initForm() {
      this.authForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
    }

    onSubmit() {
      if(this.authForm.invalid)
        return

      createUserWithEmailAndPassword(this.auth, this.authForm.value.username, this.authForm.value.password)
      .then((response) => {
        this.redirectToDashboardPage();
      })
      .catch(err => {
        console.log('error:', err);
        if(err instanceof Error)
        {
          if(err.message.includes(AuthErrorCodes.INVALID_EMAIL)){
            this.errMessage = "Email is not valid";
          }
          else if (err.message.includes(AuthErrorCodes.WEAK_PASSWORD)){
            this.errMessage = "Please enter a strong password";
          }
          else if(err.message.includes(AuthErrorCodes.EMAIL_EXISTS)){
            this.errMessage = "The email is already used for another account";
          }
          else if(err.message.includes(AuthErrorCodes.INVALID_APP_CREDENTIAL)){
            this.errMessage = "Invalid user credentials. Kindly register."
          }
          else{
            this.errMessage = "Something went wrong, please try again";
          }
        }
      }
      )
    }

    onSignInWithGoogle(){
      signInWithPopup(this.auth, this.googleAuthProvider)
      .then(res => {
        this.redirectToDashboardPage();
      })
      .catch(err => {
        console.log('error: ', err);
        this.errMessage = "Something went wrong, please try again"
      })
    }

    redirectToDashboardPage() {
      this.router.navigate(['/']);
    }
}
