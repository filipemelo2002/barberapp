import { InvalidRequired } from "src/errors/invalid-required";
import { AbstractValidator } from "./abstract-validator";

export class RequiredValidator extends AbstractValidator {

  constructor() {
    super();
  }

  public override validate(request: string): Error | null {
    if (request && request.length > 0) {
      return super.validate(request)
    }

    return new InvalidRequired();
  }
}
