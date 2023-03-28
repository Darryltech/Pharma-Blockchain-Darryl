import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaNotificationComponent } from './pharma-notification.component';

describe('PharmaNotificationComponent', () => {
  let component: PharmaNotificationComponent;
  let fixture: ComponentFixture<PharmaNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
