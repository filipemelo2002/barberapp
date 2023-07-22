import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCustomerService, CreateCustomerServiceRequest } from '@auth/use-cases/create-customer.service';
import { ToastService } from '@components/toast/toast.service';
import { Field } from '@entities/field';
import { Form } from '@entities/form';
import { CreateCustomerError } from '@errors/create-customer-error';
import { BehaviorSubject, finalize } from 'rxjs';
import { AuthFormFactory } from 'src/factories/auth-form-factory';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {


  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
  private form: Form;

  name: Field;
  email: Field;
  password: Field;
  phone: Field;

  constructor(private createCustomer: CreateCustomerService, private toastService: ToastService, private router: Router) {
    this.form = AuthFormFactory.createSignupForm();

    this.name = this.form.getFieldByName('name') as Field;
    this.email = this.form.getFieldByName('email') as Field;
    this.password = this.form.getFieldByName('password') as Field;
    this.phone = this.form.getFieldByName('phone') as Field;
  }

  signUp() {
    this.form.validateFields();

    if (!this.form.isFormValid()) {
      this.toastService.showError({
        header: 'Erro nos campos',
        body: 'Por favor, preencha os campos corretamente e tente novamente.'
      });
      return;
    }

    this._loading.next(true);
    const data = this.form.getValues() as CreateCustomerServiceRequest;
    const subscription = this.createCustomer.execute(data);

    subscription.pipe(finalize(() => this._loading.next(false)))
      .subscribe({
        next: () => this.router.navigateByUrl('sign-in'),
        error: (error) => {
          if (error instanceof CreateCustomerError) {
            this.toastService.showError({
              header: error.header,
              body: error.body
            })
          }
        }
      });
  }
}
