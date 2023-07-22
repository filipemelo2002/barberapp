import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCustomerService } from '@auth/use-cases/create-customer.service';
import { ToastService } from '@components/toast/toast.service';
import { CreateCustomerError } from '@errors/create-customer-error';
import { BehaviorSubject, finalize } from 'rxjs';

interface Fields {
  name: {
    value: string;
    error: boolean;
  };

  email: {
    value: string;
    error: boolean;
  };

  password: {
    value: string;
    error: boolean;
  };

  phone: {
    value: string;
    error: boolean;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  fields: Fields = {
    name : {
    value: '',
    error: false,
    },
    email : {
      value: '',
      error: false
    },
    password : {
      value: '',
      error: false
    },

    phone : {
      value: '',
      error: false
    }
  }

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(private createCustomer: CreateCustomerService, private toastService: ToastService, private router: Router) {}
  signUp() {
    this._loading.next(true);
    const subscription = this.createCustomer.execute({
      name: this.fields.name.value,
      email: this.fields.email.value,
      password: this.fields.password.value,
      phone: this.fields.phone.value,
    });

    subscription.pipe(finalize(() => this._loading.next(false)))
      .subscribe({
        next: () => this.router.navigateByUrl('sign-in'),
        error: (error) => {
          if (error instanceof CreateCustomerError) {
            const field = error.field as keyof Fields;
            this.fields[field].error = true;
            this.toastService.showError({
              header: error.header,
              body: error.body
            })
          }
        }
      });
  }
}
