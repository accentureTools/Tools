import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRegisterTableComponent } from './consumer-register-table.component';

describe('ConsumerRegisterTableComponent', () => {
  let component: ConsumerRegisterTableComponent;
  let fixture: ComponentFixture<ConsumerRegisterTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerRegisterTableComponent]
    });
    fixture = TestBed.createComponent(ConsumerRegisterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
