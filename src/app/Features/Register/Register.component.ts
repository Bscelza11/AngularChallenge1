import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/Core/authentication.service';
import { passwordValidators } from 'src/app/shared/passwordValidators.directive';
import { passwordMatch } from 'src/app/shared/passwordMatch.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        passwordValidators(),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordMatch }
  );

  get confirmPassword() {
    return this.formRegister.get('confirmPassword')!;
  }
  get email() {
    return this.formRegister.get('email')!;
  }

  get userName() {
    return this.formRegister.get('userName')!;
  }

  get newPassword() {
    return this.formRegister.get('newPassword')!;
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
