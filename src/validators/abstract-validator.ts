export interface Validator {
  validate(request: string): Error | null;

  setNext(handler: Validator): Validator;

}

export class AbstractValidator implements Validator {
  private nextValidator: Validator;

  public setNext(handler: Validator): Validator {
    this.nextValidator = handler;

    return handler;
  }

  public validate(request: string): Error | null {
    if (this.nextValidator) {
      return this.nextValidator.validate(request);
    }

    return null;
  }
}
