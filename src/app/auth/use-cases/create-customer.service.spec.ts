import { TestBed } from '@angular/core/testing';

import { CreateCustomerService } from './create-customer.service';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';

describe('CreateCustomerService', () => {
  let service: CreateCustomerService;
  let httpClient: jasmine.SpyObj<HttpClientProviderService>;
  beforeEach(async() => {
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'post', 'put', 'remove']);

    await TestBed
      .configureTestingModule({
        providers: [
          {
            provide: HttpClientProviderService,
            useValue: httpClient
          },
          CreateCustomerService
        ]
      })
      .compileComponents();
    service = TestBed.inject(CreateCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
