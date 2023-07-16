export interface Validator {
  validate(request: string): boolean;

  setNext(handler: Validator): Validator;

}

export class AbstractValidator implements Validator {
  private nextValidator: Validator;

  public setNext(handler: Validator): Validator {
    this.nextValidator = handler;

    return handler;
  }

  public validate(request: string): boolean {
    if (this.nextValidator) {
      return this.nextValidator.validate(request);
    }

    return true;
  }
}
