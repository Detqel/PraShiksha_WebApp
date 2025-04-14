import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  logout() {
    return signOut(this.auth);
  }

  get currentUser() {
    return this.userSubject.value;
  }
}
