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

  getFieldByName(name: string) {
    return this.fields.find(field => field.name === name);
  }
}
