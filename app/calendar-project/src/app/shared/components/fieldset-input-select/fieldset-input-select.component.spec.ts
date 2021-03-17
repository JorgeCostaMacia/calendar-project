import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetInputSelectComponent } from './fieldset-input-select.component';

describe('FieldsetInputSelectComponent', () => {
  let component: FieldsetInputSelectComponent;
  let fixture: ComponentFixture<FieldsetInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetInputSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
