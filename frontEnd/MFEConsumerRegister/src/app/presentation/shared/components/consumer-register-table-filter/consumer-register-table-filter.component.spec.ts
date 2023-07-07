import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRegisterTableFilterComponent } from './consumer-register-table-filter.component';

describe('ConsumerRegisterTableFilterComponent', () => {
  let component: ConsumerRegisterTableFilterComponent;
  let fixture: ComponentFixture<ConsumerRegisterTableFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerRegisterTableFilterComponent]
    });
    fixture = TestBed.createComponent(ConsumerRegisterTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
