import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSideComponent } from './driver-side.component';

describe('DriverSideComponent', () => {
  let component: DriverSideComponent;
  let fixture: ComponentFixture<DriverSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
