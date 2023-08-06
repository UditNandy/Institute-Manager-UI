import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() dataSource: any;
  @Input() displayedColumns: any;
  @Output() buttonEvent = new EventEmitter();
  protected requiredColumns: any = [];

  constructor() {}

  ngOnInit() {
    this.displayedColumns.forEach((value: any) => {
      console.log(value);
      this.requiredColumns.push(value.id);
    });
    console.log('Displayed columns', this.displayedColumns);
  }

  emitAction = (event: any, element: any) => {
    this.buttonEvent.emit({
      action: event,
      element: element,
    });
  };
}
