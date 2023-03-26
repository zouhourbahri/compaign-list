import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
   MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
  ]
})
export class SharedModule { }
