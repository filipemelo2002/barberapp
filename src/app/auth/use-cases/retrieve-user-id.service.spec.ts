import { TestBed } from '@angular/core/testing';

import { RetrieveUserIdService } from './retrieve-user-id.service';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';

interface LocalStorageObj {
  barberapp_customer: string
}
describe('RetrieveUserService', () => {
  let service: RetrieveUserIdService;
  const localStorageObj:LocalStorageObj = {
    [CUSTOMER_LOCAL_STORAGE_KEY]: JSON.stringify({id: 'whatever-id'})
  };
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        RetrieveUserIdService
      ]
    }).compileComponents();
    service = TestBed.inject(RetrieveUserIdService);
  });

  beforeEach(() => {


    spyOn(window.localStorage, 'getItem').and.callFake((key: keyof LocalStorageObj) =>
    localStorageObj[key] || null
    );

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user from localstorage', () => {

    const response = service.execute();

    expect(response).toBeTruthy();

    expect(response?.id).toEqual(JSON.parse(localStorageObj[CUSTOMER_LOCAL_STORAGE_KEY]).id);
  })
});
