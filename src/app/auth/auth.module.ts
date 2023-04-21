import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthModule { }
