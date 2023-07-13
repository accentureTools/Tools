import { Component, Input } from '@angular/core';
import {FormControl} from  '@angular/forms';

@Component({
  selector: 'app-design-system-form-input',
  templateUrl: './design-system-form-input.component.html',
  styleUrls: ['./design-system-form-input.component.scss']
})
export class DesignSystemFormInputComponent {
  private __formControl: FormControl  = new FormControl('');

  @Input()
  public label: string = '';

  @Input()
  public set formControl(formControl: FormControl) {
    this.__formControl = formControl;
  };

  public get formControl() {
    return this.__formControl;
  }

  @Input()
  public placeholder: string = '';
}
