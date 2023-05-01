import { Component } from '@angular/core';
import { ToastService } from '@components/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barberapp';

  constructor(public toastService: ToastService) {
  }

}
