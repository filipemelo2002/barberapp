import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { SignInComponent } from '@auth/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '**', component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
