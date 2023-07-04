import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeHeaderComponent } from './mfe-header.component';



@NgModule({
  declarations: [MfeHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [MfeHeaderComponent]
})
export class MfeHeaderModule { }
