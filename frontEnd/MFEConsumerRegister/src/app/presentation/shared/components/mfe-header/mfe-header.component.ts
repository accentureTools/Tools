import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mfe-header',
  templateUrl: './mfe-header.component.html',
  styleUrls: ['./mfe-header.component.scss']
})
export class MfeHeaderComponent {
  @Input()
  public headerTitle = '{{PUT YOUR MFE TITLE HERE!!!}}';
}
