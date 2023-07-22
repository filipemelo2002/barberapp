import { EmailValidator } from "@validators/email-validator";
import { RequiredValidator } from "@validators/required-validator";
import { Field } from "./field";

describe('Field', () => {
  let field: Field;

  beforeEach(() => {
    field = new Field({});
  });

  it('should create a field object', () => {
    expect(field).toBeTruthy();
  });

  it('should set the validators', () => {
    const requiredValidator = new RequiredValidator();
    const emailValidator = new EmailValidator();
    requiredValidator.setNext(emailValidator);

    field.validator = requiredValidator;

    field.validate();

    expect(field.error).toBeTrue();
  })
})
