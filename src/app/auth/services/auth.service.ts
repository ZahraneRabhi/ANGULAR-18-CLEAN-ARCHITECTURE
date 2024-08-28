import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, Subject, ReplaySubject, tap, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private isLoggedIn: Subject<boolean> = new ReplaySubject<boolean>(1);
  private loginErrorSubject = new Subject<string>();
  private logSubject = new Subject<string>();

  loginError$ = this.loginErrorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router) {
    const token = this.getToken();
    this.isLoggedIn.next(!!token);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/register`, user).pipe(
      tap(response => {
        console.log('Registration response:', response);
      })
    );
  }

  login(user: User): Observable<User> {
    return this.http.post(`${this.apiUrl}/Auth/login`, user).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.isLoggedIn.next(true);
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);

          const logMessage = 'Login successful: ' + response.token;
          console.log('Login response:', logMessage);
          this.logSubject.next(logMessage);
        }
      }),
      catchError(error => {
        const errorMessage = 'Incorrect username or password';
        console.error(errorMessage);
        this.logSubject.next(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  logout(): void {
    this.isLoggedIn.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  loginStatusChange(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getHealthCheck(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
