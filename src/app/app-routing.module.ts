import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { SignInComponent } from '@auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/pages/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppointmentComponent } from './dashboard/pages/appointment/appointment.component';
import { MyAppointmentsComponent } from './dashboard/pages/my-appointments/my-appointments.component';
import { AuthGuardGuard } from '@auth/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'sign-in', component: SignInComponent, title: 'BarberApp - Sign In'
  },
  {
    path: 'sign-up', component: SignUpComponent, title: 'BarberApp - Sign Up'
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent, title: 'BarberApp - Dashboard', canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        component: AppointmentComponent,
      },
      {
        path: 'my-appointments',
        component: MyAppointmentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
