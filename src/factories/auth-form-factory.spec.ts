import { AuthFormFactory } from "./auth-form-factory"

describe('AuthFormFactory', () => {

  it('should create a Sign up form', () => {
    const form = AuthFormFactory.createSignupForm();

    expect(form.fields.map(({name}) => name)).toEqual(['name', 'email', 'password', 'phone'])
  })

})
