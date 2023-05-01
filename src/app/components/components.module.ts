import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { ToastService } from './toast/toast.service';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ToastService
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ToastComponent
  ]
})
export class ComponentsModule { }
