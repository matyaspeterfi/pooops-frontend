import { AuthService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailInput: string;
  passwordInput: string;
  loginMessage: string;
  idToken: number;
  _acceptedResponses = [
    'Incorrect email and/or password!',
    'Please enter a email and a password!'
  ];

  constructor(private authService: AuthService, public router: Router) { }

  handleError(error) {
    console.log(error.error.message);
    if (this._acceptedResponses.indexOf(error.error.message) > -1) {
      return error.error.message;
    } else {
      return 'Unknown error, please try again later';
    }
  }

  sendLogin() {
    if (this.emailInput && this.passwordInput) {
      this.authService.login(this.emailInput, this.passwordInput).subscribe(
        response => {
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('refresh_token', response.refreshToken);
          this.router.navigate(['/home']);
        },
        error => {
          this.loginMessage = this.handleError(error);
        }
      );
    } else {
      this.loginMessage = 'Please add an e-mail and a password';
    }
  }

  navigateRegister() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
