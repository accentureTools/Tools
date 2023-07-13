import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemTextareaComponent } from './design-system-textarea.component';

describe('DesignSystemTextareaComponent', () => {
  let component: DesignSystemTextareaComponent;
  let fixture: ComponentFixture<DesignSystemTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemTextareaComponent]
    });
    fixture = TestBed.createComponent(DesignSystemTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
