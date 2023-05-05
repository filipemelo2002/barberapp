import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER_LOCAL_STORAGE_KEY } from '@constants/index';
import { GetCustomerLocalstorageService } from '../../user-cases/get-customer-localstorage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  name: string = '';
  constructor(private router: Router, private getCustomerLocalStorage: GetCustomerLocalstorageService) {
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    const response = this.getCustomerLocalStorage.execute();
    if (!response) {
      return;
    }

    this.name = response.customer.name;
  }

  signOut() {
    window.localStorage.removeItem(CUSTOMER_LOCAL_STORAGE_KEY);
    this.router.navigateByUrl('/sign-in');
  }
}
