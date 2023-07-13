import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemTextareaComponent } from './design-system-textarea.component';



@NgModule({
  declarations: [
    DesignSystemTextareaComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [DesignSystemTextareaComponent] 
})
export class DesignSystemTextareaModule { }
