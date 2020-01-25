import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/registerService/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  username: string;
  password: string;
  confirmPsw: string;
  emailError: string;
  usernameError: string;
  passwordError: string;
  confirmPswError: string;
  messageSuccess: string;
  emailStatus: boolean;
  usernameStatus: boolean;
  passwordStatus: boolean;
  confirmPswStatus: boolean;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  checkEmail(email: string): boolean {
    return (email !== undefined && email.length > 0);
  }

  emailValidation(input) {
    const user = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return (input && user.test(input));
  }

  checkPassword(password: string): boolean {
    return (password !== undefined && password.length > 7);
  }

  checkUsername(input: string): boolean {
    const username = /^[A-Za-z0-9]\w{2,6}$/;
    return (input && username.test(input));
  }

  checkIfPasswordNumLatinLetter(input) {
    const passw = /^[A-Za-z0-9]\w{7,}$/;
    return (input && passw.test(input));
  }

  checkConfirmPassword(password: string, confirmPsw: string): boolean {
    return (password  === confirmPsw);
  }

  checkStatus(emailStatus: boolean, passwordStatus: boolean, confirmPasswordStatus: boolean): boolean {
    return (emailStatus === true && passwordStatus === true && confirmPasswordStatus === true);
  }

  registerUser() {
    if (this.checkEmail(this.email) === false || this.emailValidation(this.email) === false) {
      this.emailError = 'Please insert valid e-mail address';
      this.emailStatus = false;
    } else {
      this.emailStatus = true;
      this.emailError = '';
    }
    if (this.checkUsername(this.username) === false || !this.username) {
      this.usernameError = 'Username must be between 3-7 characters';
      this.usernameStatus = false;
    } else {
      this.usernameError = '';
      this.usernameStatus = true;
    }
    if (this.checkPassword(this.password) === false) {
      this.passwordError = 'Password must be at least 8 characters';
      this.passwordStatus = false;
    } else if (this.checkIfPasswordNumLatinLetter(this.password) === false) {
      this.passwordError = 'Password can not contain special characters';
      this.passwordStatus = false;
    } else {
      this.passwordError = '';
      this.passwordStatus = true;
    }
    if (this.checkConfirmPassword(this.password, this.confirmPsw) === false) {
      this.confirmPswError = 'Password confirmation does not match';
      this.confirmPswStatus = false;
    } else {
      this.confirmPswError = '';
      this.confirmPswStatus = true;
    }
    if (this.checkStatus(this.emailStatus, this.passwordStatus, this.confirmPswStatus) === true) {
      this.registerService.sendRegister(this.email, this.username, this.password, this.confirmPsw).subscribe((response) => {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
        this.messageSuccess = 'Your account has been created.';
      }, error => {
        if (error) {
          this.emailError = 'Email already exist';
        }
      });
    }
  }

  cancelRegistration() {
    this.router.navigate(['/login']);
  }
}
