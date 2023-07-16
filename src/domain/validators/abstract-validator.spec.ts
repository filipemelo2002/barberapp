import { AbstractValidator } from "./abstract-validator"

describe('AbstractValidator', () => {
  it('should create the object', () => {
    const validator = new AbstractValidator();
    expect(validator).toBeTruthy();
  })

  it('should set the next validator', () => {
    const abstractValidator = new AbstractValidator();
    const validator = new AbstractValidator();
    abstractValidator.setNext(validator);

    expect(abstractValidator['nextValidator']).toEqual(validator);
  });

  it('should validate until reach the last validator', () => {
    const abstractValidator = new AbstractValidator();
    const validator = new AbstractValidator();
    abstractValidator.setNext(validator);

    expect(abstractValidator.validate('test')).toBeTrue();
  })
})
