import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendantComponent } from './add-attendant.component';

describe('AddAttendantComponent', () => {
  let component: AddAttendantComponent;
  let fixture: ComponentFixture<AddAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttendantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
