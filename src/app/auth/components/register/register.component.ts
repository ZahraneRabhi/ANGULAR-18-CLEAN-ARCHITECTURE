import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  credentials: User = { username: '', password: '' }; 
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    console.log('Registering user...');
    this.authService.register(this.credentials).subscribe({
      next: () => {
        //console.log('Registration successful');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Registration error:', err);
      }
    });
  }  
}