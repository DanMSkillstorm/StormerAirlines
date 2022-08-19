import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersHomeComponent } from './passengers-home.component';

describe('PassengersHomeComponent', () => {
  let component: PassengersHomeComponent;
  let fixture: ComponentFixture<PassengersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
