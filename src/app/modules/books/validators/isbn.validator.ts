import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isValidIsbn(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isbn = control.value + '';

    return isbn === '' || isbn.startsWith('1') ? null : { isbnNotValid: true }
  }
}
