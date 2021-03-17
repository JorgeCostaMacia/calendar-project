import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetInputDateComponent } from './fieldset-input-date.component';

describe('FieldsetInputDateComponent', () => {
  let component: FieldsetInputDateComponent;
  let fixture: ComponentFixture<FieldsetInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetInputDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
