import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateConsumerComponent } from './update-consumer.component';
import { MfeHeaderModule } from '../../shared/components/mfe-header/mfe-header.module';
import { DesignSystemButtonModule } from '../../shared/design-system/design-system-button/design-system-button.module';
import { DesignSystemFormSelectModule } from '../../shared/design-system/design-system-form-select/design-system-form-select.module';
import { DesignSystemFormInputModule } from '../../shared/design-system/design-system-form-input/design-system-form-input.module';
import { DesignSystemTextareaModule } from '../../shared/design-system/design-system-textarea/design-system-textarea.module';
import { DesignSystemSubtitleBannerModule } from '../../shared/design-system/design-system-subtitle-banner/design-system-subtitle-banner.module';
import { UpdateConsumerRoutingModule } from './update-consumer-routing.module';



@NgModule({
  declarations: [
    UpdateConsumerComponent
  ],
  imports: [
    CommonModule,
    MfeHeaderModule,
    DesignSystemButtonModule,
    DesignSystemFormSelectModule,
    DesignSystemFormInputModule,
    DesignSystemTextareaModule,
    DesignSystemSubtitleBannerModule,
    UpdateConsumerRoutingModule
  ]
})
export class UpdateConsumerModule { }
