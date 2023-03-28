import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaStockManagementComponent } from './pharma-stock-management.component';

describe('PharmaStockManagementComponent', () => {
  let component: PharmaStockManagementComponent;
  let fixture: ComponentFixture<PharmaStockManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaStockManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaStockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
