import { TestBed } from '@angular/core/testing';

import { GetCustomerLocalstorageService } from './get-customer-localstorage.service';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from 'src/entities/customer';

interface LocalStorageObj {
  barberapp_customer: string
}

describe('GetCustomerLocalstorageService', () => {
  let service: GetCustomerLocalstorageService;

  const customerRaw = {id: 'whatever-id', name: 'Test', email: 'test@test.com', phone: '819999999'}
  const localStorageObj:LocalStorageObj = {
    [CUSTOMER_LOCAL_STORAGE_KEY]: JSON.stringify(customerRaw)
  };

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [GetCustomerLocalstorageService]
    }).compileComponents();
    service = TestBed.inject(GetCustomerLocalstorageService);
  });


  beforeEach(() => {

    spyOn(window.localStorage, 'getItem').and.callFake((key: keyof LocalStorageObj) =>
    localStorageObj[key] || null
    );

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the customer', () => {
    const response = service.execute();

    expect(response).toBeTruthy();
    expect(response?.customer).toEqual(new Customer({
      name: customerRaw.name,
      email: customerRaw.email,
      phone: customerRaw.phone
    }, customerRaw.id));
  })
});
