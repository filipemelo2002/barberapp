import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { SignInComponent } from '@auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-in', component: SignInComponent, title: 'BarberApp - Sign In'
  },
  {
    path: 'sign-up', component: SignUpComponent, title: 'BarberApp - Sign Up'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
