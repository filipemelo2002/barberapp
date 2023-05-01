import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeCustomerService } from '@auth/use-cases/authorize-customer.service';
import { StoreUserService } from '@auth/use-cases/store-user.service';
import { ToastService } from '@components/toast/toast.service';
import { BehaviorSubject, catchError, finalize, throwError } from 'rxjs';


export const SIGN_IN_ERROR_MESSAGE_MAP: {[key: number]: string} = {
  404: 'O E-mail digitado não está cadastrado. Por favor, crie uma conta ou use outro E-Mail.',
  400: 'E-Mail ou senha inválidos. Por favor, verifique as informações digitadas e tente novamente.'
};

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
    private router: Router,
    private toastService: ToastService
  ) {}

  signIn() {
    this._loading.next(true);
    const subscription = this.authorizeCustomerService.execute({
      email: this.email,
      password: this.password,
    });
    subscription
      .pipe(
        catchError((error: HttpErrorResponse) => {

          this.toastService.showError({
            header: 'Erro ao realizar login.',
            body: SIGN_IN_ERROR_MESSAGE_MAP[error.status] || 'Por favor, verifique o usuário e senha.'
          })
          return throwError(() => error)
        }),
        finalize(() => this._loading.next(false)))
      .subscribe((response) => {
        const { customer } = response;
        this.storeUserService.execute(customer);
        this.router.navigateByUrl('/dashboard');
      });
  }
}
