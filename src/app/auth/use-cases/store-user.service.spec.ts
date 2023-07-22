import { TestBed } from '@angular/core/testing';

import { StoreUserService } from './store-user.service';
import { Customer } from 'src/entities/customer';

describe('StoreUserService', () => {
  let service: StoreUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store user in localstorage', () => {
    spyOn(window.localStorage, 'setItem');
    service.execute(new Customer({
      name: 'filipe',
      email: 'filipe@test.com',
      phone: '81999999999'
    }, 'whatever-id'));
    expect(window.localStorage.setItem).toHaveBeenCalled();
  })
});
