import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemButtonComponent } from './design-system-button.component';



@NgModule({
  declarations: [DesignSystemButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [DesignSystemButtonComponent]
})
export class DesignSystemButtonModule { }
