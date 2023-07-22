import { Validator } from "../validators/abstract-validator";

export interface FieldProps {
  name?: string;
  value: string;
  validator?: Validator;
  error: boolean;
}
export class Field {
  private props: FieldProps;

  constructor(props: Partial<FieldProps>) {
    this.props = {...this.props, ...props};
  }

  get name() {
    return this.props.name;
  }

  set name(name: string | undefined) {
    this.props.name = name;
  }

  get error () {
    return this.props.error;
  }

  get value() {
    return this.props.value;
  }

  set value(value: string) {
    this.props.value = value;
  }

  set validator(validator: Validator) {
    this.props.validator = validator;
  }

  private isValid(): Error | null {
    if (!this.props.validator) {
      return null;
    }

    return this.props.validator.validate(this.props.value);
  }

  public validate() {
    this.props.error = !!this.isValid();
  }

}
