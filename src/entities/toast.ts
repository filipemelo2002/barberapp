export interface ToastProps {
  header: string;
  body: string;
  delay?: number;
  classname?: string
}
export class Toast {
  props: ToastProps  = {} as ToastProps;
  constructor(props: ToastProps) {
    this.props = props;
  }

  get header() {
    return this.props.header
  }

  get body() {
    return this.props.body;
  }

  get delay() {
    return this.props?.delay
  }

  get classname () {
    return this.props?.classname
  }

}
