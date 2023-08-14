import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [TableComponent, ButtonComponent],
  imports: [CommonModule, SharedRoutingModule, MatTableModule],
  exports: [TableComponent, ButtonComponent],
})
export class SharedModule {}
