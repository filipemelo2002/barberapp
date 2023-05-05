import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetUserLocalstorageService } from './user-cases/get-user-localstorage.service';


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
    NgbModule
  ],
  providers: [
    GetUserLocalstorageService
  ],
  exports: [DashboardComponent, AppointmentComponent, MyAppointmentsComponent]
})
export class DashboardModule { }
