import { TestBed } from '@angular/core/testing';

import { GetUserLocalstorageService } from './get-user-localstorage.service';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { Customer } from '@entities/customer';

interface LocalStorageObj {
  barberapp_customer: string
}

describe('GetUserLocalstorageService', () => {
  let service: GetUserLocalstorageService;

  const customerRaw = {id: 'whatever-id', name: 'Test', email: 'test@test.com', phone: '819999999'}
  const localStorageObj:LocalStorageObj = {
    [CUSTOMER_LOCAL_STORAGE_KEY]: JSON.stringify(customerRaw)
  };

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [GetUserLocalstorageService]
    }).compileComponents();
    service = TestBed.inject(GetUserLocalstorageService);
  });


  beforeEach(() => {

    spyOn(window.localStorage, 'getItem').and.callFake((key: keyof LocalStorageObj) =>
    localStorageObj[key] || null
    );

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the user', () => {
    const response = service.execute();

    expect(response).toBeTruthy();
    expect(response?.customer).toEqual(new Customer({
      name: customerRaw.name,
      email: customerRaw.email,
      phone: customerRaw.phone
    }, customerRaw.id));
  })
});
