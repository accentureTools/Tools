import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemFormInputComponent } from './design-system-form-input.component';

describe('DesignSystemFormInputComponent', () => {
  let component: DesignSystemFormInputComponent;
  let fixture: ComponentFixture<DesignSystemFormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemFormInputComponent]
    });
    fixture = TestBed.createComponent(DesignSystemFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
