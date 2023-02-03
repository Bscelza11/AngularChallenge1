import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const newPassword = control.get('newPassword');
  const confirmPassword = control.get('confirmPassword');

  return newPassword &&
    confirmPassword &&
    newPassword.value !== confirmPassword.value
    ? {
        passwordMatch: true,
      }
    : null;
};
