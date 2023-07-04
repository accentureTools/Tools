import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemTableComponent } from './design-system-table.component';

describe('DesignSystemTableComponent', () => {
  let component: DesignSystemTableComponent;
  let fixture: ComponentFixture<DesignSystemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignSystemTableComponent]
    });
    fixture = TestBed.createComponent(DesignSystemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
