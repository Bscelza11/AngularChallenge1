import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/Core/authentication.service';
import { createPasswordValidator } from 'src/app/shared/passwordValidators.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [
      Validators.required,
      createPasswordValidator(),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.passwordMatchValidator,
    ]),
  });

  passwordMatchValidator(control: FormControl) {
    const newPassword = control.root.get('newPassword');
    return newPassword && control.value !== newPassword.value
      ? { passwordMatch: true }
      : null;
  }

  constructor(
    private authenticationService: authenticationService,
    private router: Router
  ) {}

  onSubmit() {
    if (
      this.formRegister.value.email != null &&
      this.formRegister.value.newPassword != null &&
      this.formRegister.value.userName != null
    ) {
      this.authenticationService.sendName(this.formRegister.value.userName);
      this.router.navigate(['/profile']);
      console.log(this.formRegister);
    } else {
      console.log('Error');
    }
  }
}
