export class ValidatorProperty {
  public isValid: boolean = true;
  public error = '';

  constructor(isValid: boolean, error: string) {
    this.isValid = isValid;
    this.error = error;
  }
}
