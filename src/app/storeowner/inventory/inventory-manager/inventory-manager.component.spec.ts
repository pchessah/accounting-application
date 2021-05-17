import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagerComponent } from './inventory-manager.component';

describe('InventoryManagerComponent', () => {
  let component: InventoryManagerComponent;
  let fixture: ComponentFixture<InventoryManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
