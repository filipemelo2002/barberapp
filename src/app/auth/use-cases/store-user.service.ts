import { Injectable } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from '@entities/customer';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  execute(customer: Customer) {
    localStorage.setItem(CUSTOMER_LOCAL_STORAGE_KEY, JSON.stringify(customer));
  }
}
