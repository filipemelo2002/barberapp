import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { catchError, throwError } from 'rxjs';
import { CreateCustomerError } from '@errors/create-customer-error';

interface CreateCustomerServiceRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}
@Injectable()
export class CreateCustomerService {

  constructor(private httpClient: HttpClientProviderService) { }

  execute(request: CreateCustomerServiceRequest) {
    const  {name, email, password, phone} = request;
    return this.httpClient.post<void>('/customers', {
      name, email, password, phone
    }).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === HttpStatusCode.Conflict) {
      const field = error.error.field;
      return throwError(() => new CreateCustomerError('Erro ao criar conta', `Por favor, utilize outro ${field} ou faça Login.`, field))
    }
    return throwError(() => new Error('Erro ao criar conta'))
  }
}
