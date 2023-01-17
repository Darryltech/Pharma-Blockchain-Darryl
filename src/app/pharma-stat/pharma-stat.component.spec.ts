import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaStatComponent } from './pharma-stat.component';

describe('PharmaStatComponent', () => {
  let component: PharmaStatComponent;
  let fixture: ComponentFixture<PharmaStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
