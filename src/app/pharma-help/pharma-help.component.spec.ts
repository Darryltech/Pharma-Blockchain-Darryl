import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaHelpComponent } from './pharma-help.component';

describe('PharmaHelpComponent', () => {
  let component: PharmaHelpComponent;
  let fixture: ComponentFixture<PharmaHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
