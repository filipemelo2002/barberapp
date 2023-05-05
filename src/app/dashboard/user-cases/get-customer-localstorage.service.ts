import { Injectable } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from '@entities/customer';

@Injectable()
export class GetCustomerLocalstorageService {

  constructor() { }

  execute() {
    const customerRaw = localStorage.getItem(CUSTOMER_LOCAL_STORAGE_KEY);

    if (!customerRaw) {
      return null;
    }
    try {
      const customer = JSON.parse(customerRaw);

      return {
        customer: new Customer({
          name: customer.name,
          email: customer.email,
          phone: customer.phone
        }, customer._id),
      }
    } catch (exception) {
      return null;
    }
  }
}
