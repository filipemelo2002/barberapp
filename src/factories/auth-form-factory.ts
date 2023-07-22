import { Field } from "@entities/field";
import { Form } from "@entities/form";
import { ValidatorBuilder } from "@validators/validator-builder";

export class AuthFormFactory {

  static createSignupForm() {

    const name = new Field({name: 'name', value: ''});
    name.validator = new ValidatorBuilder().required().build();

    const email = new Field({name: 'email', value: ''});
    email.validator = new ValidatorBuilder().required().email().build();

    const password = new Field({name: 'password', value: ''});
    password.validator = new ValidatorBuilder().required().build();

    const phone = new Field({name: 'phone', value: ''});
    phone.validator = new ValidatorBuilder().required().build();

    const form = new Form([name, email, password, phone]);

    return form;
  }

}
