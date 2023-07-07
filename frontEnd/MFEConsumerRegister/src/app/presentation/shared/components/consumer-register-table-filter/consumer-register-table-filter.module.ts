import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerRegisterTableFilterComponent } from './consumer-register-table-filter.component';
import { DesignSystemFormSelectModule } from '../../design-system/design-system-form-select/design-system-form-select.module';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';


@NgModule({
  declarations: [ConsumerRegisterTableFilterComponent],
  imports: [
    CommonModule,
    DesignSystemFormSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ConsumerRegisterTableFilterComponent]
})
export class ConsumerRegisterTableFilterModule { }
