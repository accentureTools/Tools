import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemFormSelectComponent } from './design-system-form-select.component';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';

@NgModule({
  declarations: [DesignSystemFormSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DesignSystemFormSelectComponent]
})
export class DesignSystemFormSelectModule { }
