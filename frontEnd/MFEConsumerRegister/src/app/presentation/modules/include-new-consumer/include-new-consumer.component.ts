import { Component } from '@angular/core';
import { MFEHeaderTitlesEnum } from '../../shared/enums/mfe-header-titles.enum';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-include-new-consumer',
  templateUrl: './include-new-consumer.component.html',
  styleUrls: ['./include-new-consumer.component.scss']
})
export class IncludeNewConsumerComponent {
  public mfeHeaderTitle = MFEHeaderTitlesEnum.INCLUDE_NEW_CONSUMER;

  public formGroup = this.formBuilder.group({
    selectConsumer: this.formBuilder.control(''),
    cnpjInput: this.formBuilder.control(''),
    statusInput: this.formBuilder.control('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  public backToMainMFEConsumerPage() {
    this.router.navigate([environment.routerPaths.mfeConsumerMain]);
  }
}
