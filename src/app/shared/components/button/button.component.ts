import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() buttonStyle!: string;
  @Input() buttonTitle!: string;
  @Output() clickEvent = new EventEmitter<string>();

  buttonClicked = (value: string) => {
    this.clickEvent.emit(value);
  };
}
