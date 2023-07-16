import { NotNullValidator } from "./not-null-validator"

describe('NotNullValidator', () => {
  let validator: NotNullValidator;

  beforeEach(() => {
    validator = new NotNullValidator();
  });

  it('should create the validator', () => {
    expect(validator).toBeTruthy();
  });

  it('should validate the field', () => {
    expect(validator.validate('test')).toBeTrue();
  });

  it('should not validate the field', () => {
    expect(validator.validate('')).toBeFalse();
  });
})
