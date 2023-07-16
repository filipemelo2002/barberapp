import { AbstractValidator } from "./abstract-validator";

export class NotNullValidator extends AbstractValidator {

  constructor() {
    super();
  }

  public override validate(request: string): boolean {
    if (request && request.length > 0) {
      return super.validate(request)
    }

    return false;
  }
}
