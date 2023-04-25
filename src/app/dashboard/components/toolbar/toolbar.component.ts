import { Component } from '@angular/core';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  signOut() {
    window.localStorage.removeItem(CUSTOMER_LOCAL_STORAGE_KEY);
  }
}
