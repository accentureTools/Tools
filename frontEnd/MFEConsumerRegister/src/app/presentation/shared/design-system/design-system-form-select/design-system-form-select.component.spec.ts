import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemFormSelectComponent } from './design-system-form-select.component';

describe('DesignSystemFormSelectComponent', () => {
  let component: DesignSystemFormSelectComponent;
  let fixture: ComponentFixture<DesignSystemFormSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemFormSelectComponent]
    });
    fixture = TestBed.createComponent(DesignSystemFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
