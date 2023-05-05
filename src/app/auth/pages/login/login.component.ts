import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('user') user!: ElementRef<HTMLInputElement>;
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;

  errorUser: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const auth = this.authService.login(
      this.user.nativeElement.value,
      this.password.nativeElement.value
    );

    if (auth) {
      this.errorUser = false;
      sessionStorage.setItem('auth', 'true');
      this.router.navigateByUrl('/home');
    } else {
      this.errorUser = true;
    }
  }
}
