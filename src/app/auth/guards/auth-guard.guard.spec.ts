import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { RetrieveUserIdService } from '@auth/use-cases/retrieve-user-id.service';
import { Router } from '@angular/router';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;
  let retrieveUserIdService: jasmine.SpyObj<RetrieveUserIdService>;
  let router: jasmine.SpyObj<Router>;
  beforeEach(async() => {
    retrieveUserIdService = jasmine.createSpyObj<RetrieveUserIdService>('retrieveUserIdService', ['execute']);
    router = jasmine.createSpyObj<Router>('router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuardGuard, {
        provide: RetrieveUserIdService,
        useValue: retrieveUserIdService
      }, {
        provide: Router,
        useValue: router
      }]
    }).compileComponents();
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should trigger RetrieveUserIdService execute', () => {
    retrieveUserIdService.execute.and.returnValue({id:'whatever-id'})
    const response = guard.canActivate();
    expect(response).toBeTrue();
    expect(retrieveUserIdService.execute).toHaveBeenCalled();
  });

  it('should navigate to Sign-In', () => {
    retrieveUserIdService.execute.and.returnValue(null);
    const response = guard.canActivate();
    expect(response).toBeFalse();
    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/sign-in');
  })
});
