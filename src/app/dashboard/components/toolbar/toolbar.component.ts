import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private router: Router) {

  }
  signOut() {
    window.localStorage.removeItem(CUSTOMER_LOCAL_STORAGE_KEY);
    this.router.navigateByUrl('/sign-in');
  }
}
