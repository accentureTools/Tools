import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemFormInputComponent } from './design-system-form-input.component';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';


@NgModule({
  declarations: [
    DesignSystemFormInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DesignSystemFormInputComponent]
})
export class DesignSystemFormInputModule { }
