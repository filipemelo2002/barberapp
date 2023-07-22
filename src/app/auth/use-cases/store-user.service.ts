import { Injectable } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from 'src/entities/customer';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  execute(customer: Customer) {
    localStorage.setItem(CUSTOMER_LOCAL_STORAGE_KEY, JSON.stringify({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      id: customer.id
    }));
  }
}
