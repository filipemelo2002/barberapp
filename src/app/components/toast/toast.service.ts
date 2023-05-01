import { Injectable } from '@angular/core';
import { Toast } from '@entities/toast';

export interface ToastServiceRequest {
  header: string;
  body: string;
  delay?: number;
}

@Injectable()
export class ToastService {
  toasts: Toast[] = [];

  constructor() {}

  show(request: ToastServiceRequest) {
    const { body, header, delay } = request;
    this.toasts.push(
      new Toast({
        body,
        header,
        delay,
      })
    );
  }

  showError(request: ToastServiceRequest) {
    const { body, header, delay } = request;
    this.toasts.push(
      new Toast({
        body,
        header,
        delay,
        classname: 'bg-danger text-light'
      })
    );
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
