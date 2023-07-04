import { NgModule } from '@angular/core';
import { ConsumerRegisterTableComponent } from './consumer-register-table.component';
import { DesignSystemTableModule } from '../../design-system/design-system-table/design-system-table.module';

@NgModule({
    imports: [DesignSystemTableModule],
    declarations: [ConsumerRegisterTableComponent],
    exports: [ConsumerRegisterTableComponent]
})
export class ConsumerRegisterTableModule {}