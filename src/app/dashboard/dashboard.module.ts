import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetCustomerLocalstorageService } from './user-cases/get-customer-localstorage.service';
import { LogoutService } from './use-cases/logout.service';
import { InfraModule } from '@infra/infra.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    AppointmentComponent,
    MyAppointmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    InfraModule
  ],
  providers: [
    GetCustomerLocalstorageService,
    LogoutService
  ],
  exports: [DashboardComponent, AppointmentComponent, MyAppointmentsComponent]
})
export class DashboardModule { }
