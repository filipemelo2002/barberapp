import { Validator } from "./abstract-validator";
import { EmailValidator } from "./email-validator";
import { RequiredValidator } from "./required-validator";

export class ValidatorBuilder {
  private validator: Validator;

  required() {
    if (!this.validator) {
      this.validator = new RequiredValidator();
      return this;
    }

    this.validator.setNext(new RequiredValidator());
    return this;
  }


  email() {
    if (!this.validator) {
      this.validator = new EmailValidator();
      return this;
    }

    this.validator.setNext(new EmailValidator());
    return this;
  }

  build() {
    return this.validator;
  }
}
