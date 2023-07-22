import { Toast } from "@entities/toast";


export class CreateCustomerError extends Toast {
  field: string;
  constructor(header: string, body: string, field: string) {
    super({
      header,
      body
    });

    this.field = field;
  }
}
