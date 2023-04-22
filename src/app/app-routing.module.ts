import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { SignInComponent } from '@auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/pages/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'sign-in', component: SignInComponent, title: 'BarberApp - Sign In'
  },
  {
    path: 'sign-up', component: SignUpComponent, title: 'BarberApp - Sign Up'
  },
  {
    path: '', component: DashboardComponent, title: 'BarberApp - Dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
