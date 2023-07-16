import { EmailValidator } from "./email-validator";

describe('EmailValidator', () => {

  let validator: EmailValidator;

  beforeEach(() => {
    validator = new EmailValidator();
  });

  it('should create the validator', () => {
    expect(validator).toBeTruthy();
  });

  it('should validate the field', () => {
    expect(validator.validate('test@gmail.com')).toBeTrue();
  });

  it('should not validate the field', () => {
    expect(validator.validate('test')).toBeFalse();
  });
})
