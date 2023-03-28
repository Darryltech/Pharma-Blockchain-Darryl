import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaRegComponent } from './pharma-reg.component';

describe('PharmaRegComponent', () => {
  let component: PharmaRegComponent;
  let fixture: ComponentFixture<PharmaRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
