import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user$ = this.authService.user$;
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }
}
