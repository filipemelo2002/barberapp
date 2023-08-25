import { TestBed } from '@angular/core/testing';

import { LogoutService } from './logout.service';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { InfraModule } from '@infra/infra.module';
import { of } from 'rxjs';

describe('LogoutService', () => {
  let service: LogoutService;
  let httpClient: jasmine.SpyObj<HttpClientProviderService>;

  beforeEach(async () => {
    httpClient = jasmine.createSpyObj('httpClient', ['post']);

    httpClient.post.and.returnValue(of())
    await TestBed.configureTestingModule({
      providers: [{
        provide: HttpClientProviderService,
        useValue: httpClient
      }],
      imports: [InfraModule],
    }).compileComponents();
    service = TestBed.inject(LogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute method', () => {
    service.execute().subscribe();
    expect(httpClient.post).toHaveBeenCalled();
  })
});
