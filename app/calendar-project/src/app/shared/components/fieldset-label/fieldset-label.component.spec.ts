import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetLabelComponent } from './fieldset-label.component';

describe('FieldsetLabelComponent', () => {
  let component: FieldsetLabelComponent;
  let fixture: ComponentFixture<FieldsetLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
