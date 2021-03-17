import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetErrorComponent } from './fieldset-error.component';

describe('FieldsetErrorComponent', () => {
  let component: FieldsetErrorComponent;
  let fixture: ComponentFixture<FieldsetErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
