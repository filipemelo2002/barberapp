import { RequiredValidator } from "./required-validator";
import { ValidatorBuilder } from "./validator-builder";

describe('ValidatorBuilder', () => {
  let validatorBuilder: ValidatorBuilder;

  beforeEach(() => {
    validatorBuilder = new ValidatorBuilder();
  });

  it('should create the object', () => {
    expect(validatorBuilder).toBeTruthy();
  });

  it('should create a required validator', () => {
    expect(validatorBuilder.required().build()).toBeInstanceOf(RequiredValidator);
  });

});
