import { Component } from '@angular/core';
import { MFEHeaderTitlesEnum } from '../../shared/enums/mfe-header-titles.enum';

@Component({
  selector: 'app-crud-consumer',
  templateUrl: './crud-consumer.component.html',
  styleUrls: ['./crud-consumer.component.scss']
})
export class CrudConsumerComponent {
  public mfeHeaderTitle = MFEHeaderTitlesEnum.MFE_CONSUMER_REGISTER;
}
