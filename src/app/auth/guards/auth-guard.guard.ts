import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RetrieveUserIdService } from '@auth/use-cases/retrieve-user-id.service';

@Injectable()
export class AuthGuardGuard {

  constructor(private retrieveUserId: RetrieveUserIdService, private router: Router) {

  }
  canActivate(): boolean {

    const activate = !!this.retrieveUserId.execute();

    if(!activate) {
      this.router.navigateByUrl('/sign-in');
    }

    return !!this.retrieveUserId.execute();
  }

}
