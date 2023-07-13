import { Component } from '@angular/core';
import { MFEHeaderTitlesEnum } from '../../shared/enums/mfe-header-titles.enum';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-crud-consumer',
  templateUrl: './crud-consumer.component.html',
  styleUrls: ['./crud-consumer.component.scss']
})
export class CrudConsumerComponent {
  public mfeHeaderTitle = MFEHeaderTitlesEnum.MFE_CONSUMER_REGISTER;

  constructor(private router: Router) {

  }

  public goToincludeConsumerPage() {
    this.router.navigate([environment.routerPaths.includeConsumer]);
  }
}
