import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-system-textarea',
  templateUrl: './design-system-textarea.component.html',
  styleUrls: ['./design-system-textarea.component.scss']
})
export class DesignSystemTextareaComponent {

  @Input()
  public label = ''

}
