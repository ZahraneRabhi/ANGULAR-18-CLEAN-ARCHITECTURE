import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: User = { username: '', password: '' }; 
  failedLogin: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  login() {
    this.authService.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => 
      {
        console.log(err)
        this.failedLogin = true
      }
    });
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
