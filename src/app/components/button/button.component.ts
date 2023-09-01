import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  type?: string;

  @Output()
  onClick = new EventEmitter<Event>();

  @Input()
  disabled!: boolean | null;

  @Input()
  loading!: boolean | null;

  handleClick($event: Event) {
    this.onClick.emit($event);
  }
}
