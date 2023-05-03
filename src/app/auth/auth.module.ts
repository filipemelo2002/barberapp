import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ComponentsModule } from '@components/components.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { AuthorizeCustomerService } from './use-cases/authorize-customer.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { RetrieveUserIdService } from './use-cases/retrieve-user-id.service';
import { StoreUserService } from './use-cases/store-user.service';
import { InfraModule } from '@infra/infra.module';
import { CreateCustomerService } from './use-cases/create-customer.service';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    InfraModule
  ],
  providers: [
    AuthorizeCustomerService,
    RetrieveUserIdService,
    AuthGuardGuard,
    StoreUserService,
    CreateCustomerService
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
