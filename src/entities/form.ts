import { Field } from "./field";

interface FormGetValuesResponse {
  [key: string]: any;
}
export class Form {
  constructor(public fields: Field[]) {
  }

  getValues(): FormGetValuesResponse {
    return this.fields.reduce((prev, curr) => ({
      ...prev,
      [curr.name]: curr.value
    }), {});
  }

  validateFields() {
    this.fields.forEach(field => field.validate());
  }

  isFormValid() {
    return this.fields.map(field => field.isValid()).every(result => result === null);
  }

  getFieldByName(name: string): Field | null {
    return this.fields.find(field => field.name === name) || null;
  }
}
