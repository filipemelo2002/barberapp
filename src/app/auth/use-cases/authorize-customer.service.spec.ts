import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AuthorizeCustomerService } from './authorize-customer.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Customer } from 'src/entities/customer';
import { InfraModule } from '@infra/infra.module';

describe('AuthorizeCustomerService', () => {
  let service: AuthorizeCustomerService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  const token = {access_token: 'testing', customer: new Customer({
    name: 'filipe',
    email: 'filipe@test.com',
    phone: '819999999999'
  })};

  beforeEach(async () => {
    httpClient = jasmine.createSpyObj('httpClient', ['post']);
    httpClient.post.and.returnValues(of(token));
    await TestBed.configureTestingModule({
      imports: [InfraModule],
      providers: [{
        provide: HttpClient,
        useValue: httpClient
      }, AuthorizeCustomerService]
    }).compileComponents();

    service = TestBed.inject(AuthorizeCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute service', () => {
    const subscription = service.execute({
      email: 'test@test.com',
      password: 'test'
    });

    expect(httpClient.post).toHaveBeenCalled();
    subscription.subscribe(value => {
      expect(value).toEqual(token)
    })
  });

});
