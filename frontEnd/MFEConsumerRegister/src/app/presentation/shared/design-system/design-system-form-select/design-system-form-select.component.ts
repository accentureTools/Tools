import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-design-system-form-select',
  templateUrl: './design-system-form-select.component.html',
  styleUrls: ['./design-system-form-select.component.scss']
})
export class DesignSystemFormSelectComponent {

  private __formControl:FormControl  = new FormControl('');

  @Input()
  public set formControl(formControl: FormControl) {
    this.__formControl = formControl;
  };

  public get formControl() {
    return this.__formControl;
  }

  private __options: Array<string> = [];

  @Input()
  public set options(options: Array<string>) {
    this.__options = options;
  }
  
  @Input()
  public placeholder: string = '';

  @Input()
  public label: string = '';

  public get options() {
    return this.__options;
  }

}
