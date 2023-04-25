import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '@entities/customer';
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

  constructor(private httpClient: HttpClient) { }


  execute(request: AuthorizeCustomerServiceRequest): Observable<AuthorizeCustomerServiceResponse> {
    const {email, password} = request;
    return this.httpClient.post<AuthorizeCustomerServiceResponse>('http://192.168.0.177:3000/login/customer', {
      email, password
    }, {withCredentials: true})
  }
}
