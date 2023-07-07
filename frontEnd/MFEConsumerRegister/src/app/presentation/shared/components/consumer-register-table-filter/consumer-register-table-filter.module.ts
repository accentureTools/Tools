import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerRegisterTableFilterComponent } from './consumer-register-table-filter.component';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { DesignSystemFormInputModule } from '../../design-system/design-system-form-input/design-system-form-input.module';
import { DesignSystemButtonModule } from '../../design-system/design-system-button/design-system-button.module';
import { DesignSystemFormSelectModule } from '../../design-system/design-system-form-select/design-system-form-select.module';


@NgModule({
  declarations: [ConsumerRegisterTableFilterComponent],
  imports: [
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    DesignSystemFormSelectModule,
    DesignSystemFormInputModule,
    DesignSystemButtonModule
  ],
  exports: [ConsumerRegisterTableFilterComponent]
})
export class ConsumerRegisterTableFilterModule { }
