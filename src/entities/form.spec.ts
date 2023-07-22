import { Field } from "./field";
import { Form } from "./form"

describe('Form', () => {
  let form: Form;
  let dummyField: Field;
  beforeEach(() => {
    dummyField = new Field({name: 'name'});
    form = new Form([dummyField]);
  });

  it('should create a Form object', () => {
    expect(form).toBeTruthy();
  });

  it('should return the field by name', () => {
    const field = form.getFieldByName('name');
    expect(field).toEqual(dummyField);
  });

  it('should return the form values', () => {
    dummyField.value = 'Test';
    const response = form.getValues();
    expect(response).toEqual({
      name: 'Test'
    })
  })
})
