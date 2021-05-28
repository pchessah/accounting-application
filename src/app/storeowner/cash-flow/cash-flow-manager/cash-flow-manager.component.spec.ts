import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowManagerComponent } from './cash-flow-manager.component';

describe('CashFlowManagerComponent', () => {
  let component: CashFlowManagerComponent;
  let fixture: ComponentFixture<CashFlowManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
