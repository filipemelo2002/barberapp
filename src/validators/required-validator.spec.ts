import { InvalidRequired } from "src/errors/invalid-required";
import { RequiredValidator } from "./required-validator"

describe('requiredValidator', () => {
  let validator: RequiredValidator;

  beforeEach(() => {
    validator = new RequiredValidator();
  });

  it('should create the validator', () => {
    expect(validator).toBeTruthy();
  });

  it('should validate the field', () => {
    expect(validator.validate('test')).toBeNull();
  });

  it('should not validate the field', () => {
    expect(validator.validate('')).toBeInstanceOf(InvalidRequired);
  });
})
