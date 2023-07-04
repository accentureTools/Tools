import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudConsumerComponent } from './crud-consumer.component';

describe('CrudConsumerComponent', () => {
  let component: CrudConsumerComponent;
  let fixture: ComponentFixture<CrudConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudConsumerComponent]
    });
    fixture = TestBed.createComponent(CrudConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
