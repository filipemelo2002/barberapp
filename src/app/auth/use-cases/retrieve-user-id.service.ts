import { Injectable } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from 'src/app/constants';

type RetrieveUserIdServiceResponse = null | {
  id: string
}
@Injectable()
export class RetrieveUserIdService {

  constructor() { }

  execute(): RetrieveUserIdServiceResponse {
    const strCustomer = window.localStorage.getItem(CUSTOMER_LOCAL_STORAGE_KEY);
    if (!strCustomer) {
      return null;
    }

    try {
      const json = JSON.parse(strCustomer);
      return {
        id: json.id
      }
    } catch (exception) {
      return null;
    }
  }
}
