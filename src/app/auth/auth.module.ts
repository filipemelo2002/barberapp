import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ComponentsModule } from '@components/components.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { AuthorizeCustomerService } from './use-cases/authorize-customer.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { RetrieveUserIdService } from './use-cases/retrieve-user-id.service';
import { StoreUserService } from './use-cases/store-user.service';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthorizeCustomerService,
    RetrieveUserIdService,
    AuthGuardGuard,
    StoreUserService
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
  ]
})
export class AuthModule { }
