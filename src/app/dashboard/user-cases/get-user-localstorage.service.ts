import { Injectable } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from '@entities/customer';

@Injectable()
export class GetUserLocalstorageService {

  constructor() { }

  execute() {
    const userRaw = localStorage.getItem(CUSTOMER_LOCAL_STORAGE_KEY);

    if (!userRaw) {
      return null;
    }
    try {
      const user = JSON.parse(userRaw);

      return {
        customer: new Customer({
          name: user.name,
          email: user.email,
          phone: user.phone
        }, user.id),
      }
    } catch (exception) {
      return null;
    }
  }
}
