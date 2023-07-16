import { AbstractValidator } from "./abstract-validator";

export class EmailValidator extends AbstractValidator {
  public override validate(request: string): boolean {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(request)) {
      return super.validate(request);
    }

    return false;
  }
}
