import { Injectable } from '@angular/core';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';

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
    });
  }
}
