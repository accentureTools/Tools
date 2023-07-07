import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudConsumerComponent } from './crud-consumer.component';
import {CrudConsumerRoutingModule} from './crud-consumer-routing.module';
import { ConsumerRegisterTableModule } from '../../shared/components/consumer-register-table/consumer-register-table.module';
import { MfeHeaderModule } from '../../shared/components/mfe-header/mfe-header.module';
import { ConsumerRegisterTableFilterModule } from '../../shared/components/consumer-register-table-filter/consumer-register-table-filter.module';

@NgModule({
  imports: [
    CommonModule,
    CrudConsumerRoutingModule,
    ConsumerRegisterTableModule,
    ConsumerRegisterTableFilterModule,
    MfeHeaderModule,
  ],
  declarations: [CrudConsumerComponent]
})
export class CrudConsumerModule { }
