import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeNewConsumerComponent } from './include-new-consumer.component';

describe('IncludeNewConsumerComponent', () => {
  let component: IncludeNewConsumerComponent;
  let fixture: ComponentFixture<IncludeNewConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncludeNewConsumerComponent]
    });
    fixture = TestBed.createComponent(IncludeNewConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
