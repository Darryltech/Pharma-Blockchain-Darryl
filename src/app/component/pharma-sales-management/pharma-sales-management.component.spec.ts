import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaSalesManagementComponent } from './pharma-sales-management.component';

describe('PharmaSalesManagementComponent', () => {
  let component: PharmaSalesManagementComponent;
  let fixture: ComponentFixture<PharmaSalesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaSalesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaSalesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
