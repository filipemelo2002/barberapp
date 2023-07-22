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
  value!: string | undefined | null;

  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  error?: boolean;

  handleChange($event: string) {
    this.valueChange.emit($event);
  }
}
