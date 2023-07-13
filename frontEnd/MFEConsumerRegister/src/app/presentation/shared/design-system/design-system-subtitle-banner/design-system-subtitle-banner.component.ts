import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-system-subtitle-banner',
  templateUrl: './design-system-subtitle-banner.component.html',
  styleUrls: ['./design-system-subtitle-banner.component.scss']
})
export class DesignSystemSubtitleBannerComponent {
  @Input()
  public bannerText: string = '';
}
