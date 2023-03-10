import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/Core/authentication.service';
import { createPasswordValidator } from 'src/app/shared/passwordValidators.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authenticationService: authenticationService
  ) {}

  onSubmit() {
    if (
      this.loginForm.value.user != null &&
      this.loginForm.value.password != null
    ) {
      this.authenticationService.sendName(this.loginForm.value.user);
      this.router.navigate(['/profile']);
      console.log(this.loginForm);
    } else {
      console.log('Error');
    }
  }
}
