import { Injectable } from '@angular/core';
import { Customer } from 'src/entities/customer';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { Observable } from 'rxjs';


interface AuthorizeCustomerServiceRequest {
  email: string;
  password: string;
}

interface  AuthorizeCustomerServiceResponse {
  access_token: string;
  customer: Customer
}
@Injectable()
export class AuthorizeCustomerService {

  constructor(private httpClient: HttpClientProviderService) { }

  execute(request: AuthorizeCustomerServiceRequest): Observable<AuthorizeCustomerServiceResponse> {
    const {email, password} = request;
    return this.httpClient.post<AuthorizeCustomerServiceResponse>('/login/customer', {
      email, password
    }, {withCredentials: true})
  }
}
