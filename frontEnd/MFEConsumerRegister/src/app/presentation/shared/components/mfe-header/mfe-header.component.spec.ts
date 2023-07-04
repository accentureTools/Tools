import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeHeaderComponent } from './mfe-header.component';

describe('MfeHeaderComponent', () => {
  let component: MfeHeaderComponent;
  let fixture: ComponentFixture<MfeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfeHeaderComponent]
    });
    fixture = TestBed.createComponent(MfeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
