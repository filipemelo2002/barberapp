import { Toast } from "../toast";

export class CreateCustomerError extends Toast {
  constructor(header: string, body: string) {
    super({
      header,
      body
    })
  }
}
