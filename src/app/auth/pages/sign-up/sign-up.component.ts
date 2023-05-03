import { Component } from '@angular/core';
import { CreateCustomerService } from '@auth/use-cases/create-customer.service';
import { BehaviorSubject, finalize } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(private createCustomer: CreateCustomerService) {}
  signUp() {
    this._loading.next(true);
    const subscription = this.createCustomer.execute({
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
    });

    subscription.pipe(finalize(() => this._loading.next(false))).subscribe();
  }
}
