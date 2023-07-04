import { NgModule } from '@angular/core';
import { DesignSystemTableComponent } from './design-system-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [DesignSystemTableComponent],
    exports: [DesignSystemTableComponent]
})
export class DesignSystemTableModule {}