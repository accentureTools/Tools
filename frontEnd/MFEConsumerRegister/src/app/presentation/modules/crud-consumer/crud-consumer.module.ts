import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudConsumerComponent } from './crud-consumer.component';
import {CrudConsumerRoutingModule} from './crud-consumer-routing.module';
import { ConsumerRegisterTableModule } from '../../shared/components/consumer-register-table/consumer-register-table.module';

@NgModule({
  imports: [
    CommonModule,
    CrudConsumerRoutingModule,
    ConsumerRegisterTableModule
  ],
  declarations: [CrudConsumerComponent]
})
export class CrudConsumerModule { }
