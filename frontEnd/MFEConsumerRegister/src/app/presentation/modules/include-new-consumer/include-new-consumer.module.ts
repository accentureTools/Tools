import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncludeNewConsumerComponent } from './include-new-consumer.component';
import { IncludeNewConsumerRoutingModule } from './include-new-consumer-routing.module';
import { MfeHeaderModule } from '../../shared/components/mfe-header/mfe-header.module';
import { DesignSystemButtonModule } from '../../shared/design-system/design-system-button/design-system-button.module';
import { DesignSystemFormSelectModule } from '../../shared/design-system/design-system-form-select/design-system-form-select.module';
import { DesignSystemFormInputModule } from '../../shared/design-system/design-system-form-input/design-system-form-input.module';
import { DesignSystemTextareaModule } from '../../shared/design-system/design-system-textarea/design-system-textarea.module';
import { DesignSystemSubtitleBannerModule } from '../../shared/design-system/design-system-subtitle-banner/design-system-subtitle-banner.module';

@NgModule({
  declarations: [
    IncludeNewConsumerComponent
  ],
  imports: [
    CommonModule,
    MfeHeaderModule,
    DesignSystemButtonModule,
    DesignSystemFormSelectModule,
    DesignSystemFormInputModule,
    DesignSystemTextareaModule,
    DesignSystemSubtitleBannerModule,
    IncludeNewConsumerRoutingModule
  ]
})
export class IncludeNewConsumerModule { }
