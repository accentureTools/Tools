import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemButtonComponent } from './design-system-button.component';

describe('DesignSystemButtonComponent', () => {
  let component: DesignSystemButtonComponent;
  let fixture: ComponentFixture<DesignSystemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemButtonComponent]
    });
    fixture = TestBed.createComponent(DesignSystemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
