import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  type?: string;

  @Input()
  placeholder?: string;

  @Input()
  value?: string;

  @Input()
  onChange = new EventEmitter<string>();

  handleChange($event: string) {
    this.onChange.emit($event);
  }
}
