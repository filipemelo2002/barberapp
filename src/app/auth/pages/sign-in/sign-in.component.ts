import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeCustomerService } from '@auth/use-cases/authorize-customer.service';
import { StoreUserService } from '@auth/use-cases/store-user.service';
import { BehaviorSubject, delay, finalize } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(
    private authorizeCustomerService: AuthorizeCustomerService,
    private storeUserService: StoreUserService,
    private router: Router
  ) {}

  signIn() {
    this._loading.next(true);
    const subscription = this.authorizeCustomerService.execute({
      email: this.email,
      password: this.password,
    });
    subscription
      .pipe(finalize(() => this._loading.next(false)))
      .subscribe((response) => {
        const { customer } = response;
        this.storeUserService.execute(customer);
        this.router.navigateByUrl('/dashboard');
      });
  }
}
