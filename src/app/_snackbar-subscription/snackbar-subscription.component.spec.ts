import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarSubscriptionComponent } from './snackbar-subscription.component';

describe('SnackbarSubscriptionComponent', () => {
  let component: SnackbarSubscriptionComponent;
  let fixture: ComponentFixture<SnackbarSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
