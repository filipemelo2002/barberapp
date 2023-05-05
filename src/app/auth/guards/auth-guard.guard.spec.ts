import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { RetrieveUserIdService } from '@auth/use-cases/retrieve-user-id.service';
import { Router } from '@angular/router';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { InfraModule } from '@infra/infra.module';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;
  let retrieveUserIdService: jasmine.SpyObj<RetrieveUserIdService>;
  let router: jasmine.SpyObj<Router>;
  let httpClient: jasmine.SpyObj<HttpClientProviderService>;
  beforeEach(async() => {
    httpClient = jasmine.createSpyObj<HttpClientProviderService>('httpClient', ['get', 'post', 'put', 'remove']);
    retrieveUserIdService = jasmine.createSpyObj<RetrieveUserIdService>('retrieveUserIdService', ['execute']);
    router = jasmine.createSpyObj<Router>('router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, InfraModule],
      providers: [AuthGuardGuard, {
        provide: RetrieveUserIdService,
        useValue: retrieveUserIdService
      }, {
        provide: Router,
        useValue: router
    },
    {
      provide: HttpClientProviderService,
      useValue: httpClient
    }
  ]
    }).compileComponents();
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger RetrieveUserIdService execute', async () => {
    retrieveUserIdService.execute.and.returnValue({id:'whatever-id'})
    const response = await guard.canActivate();
    expect(response).toBeTrue();
    expect(httpClient.get).toHaveBeenCalled();
    expect(retrieveUserIdService.execute).toHaveBeenCalled();
  });

  it('should navigate to Sign-In', async () => {
    retrieveUserIdService.execute.and.returnValue(null);
    const response = await guard.canActivate();
    expect(response).toBeFalse();
    expect(httpClient.get).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/sign-in');
  })
});
