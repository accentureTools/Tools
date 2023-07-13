import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemSubtitleBannerComponent } from './design-system-subtitle-banner.component';

describe('DesignSystemSubtitleBannerComponent', () => {
  let component: DesignSystemSubtitleBannerComponent;
  let fixture: ComponentFixture<DesignSystemSubtitleBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemSubtitleBannerComponent]
    });
    fixture = TestBed.createComponent(DesignSystemSubtitleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
