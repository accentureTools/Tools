import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-consumer-register-table-filter',
  templateUrl: './consumer-register-table-filter.component.html',
  styleUrls: ['./consumer-register-table-filter.component.scss']
})
export class ConsumerRegisterTableFilterComponent {

  public formGroup = this.formBuilder.group({
    businessGroupSelectField: this.formBuilder.control(''),
  })

  constructor(private formBuilder: FormBuilder) {}

  public submitFilterForm() {
    console.log("FormValues: ", this.formGroup.controls.businessGroupSelectField.value);
  }

}
