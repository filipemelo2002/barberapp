import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RetrieveUserIdService } from '@auth/use-cases/retrieve-user-id.service';
import { StoreUserService } from '@auth/use-cases/store-user.service';
import { Customer } from 'src/entities/customer';
import { HttpClientProviderService } from '@infra/services/http-client-provider.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuardGuard {

  constructor(private retrieveUserId: RetrieveUserIdService,
    private router: Router,
    private httpClient: HttpClientProviderService, private storeUserService: StoreUserService) {

  }
  async canActivate(): Promise<boolean> {

    const user = this.retrieveUserId.execute();

    try {
      const id = user?.id;
      const {customer} = await firstValueFrom(this.httpClient.get<{customer: Customer}>(`/customers/${id}`, {
        withCredentials: true
      }))

      this.storeUserService.execute(new Customer({
        name: customer.name,
        email: customer.email,
        phone: customer.phone
      }, customer.id))

    } catch (exception) {
      this.router.navigateByUrl('/sign-in');
    }

    return !!user;
  }

}
