import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCheckerComponent } from './auth-checker.component';

describe('AuthCheckerComponent', () => {
  let component: AuthCheckerComponent;
  let fixture: ComponentFixture<AuthCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
