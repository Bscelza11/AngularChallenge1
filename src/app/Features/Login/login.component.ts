
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/Core/Authentication.service';

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
    } else {
      console.log('Error');
    }
  }
}
