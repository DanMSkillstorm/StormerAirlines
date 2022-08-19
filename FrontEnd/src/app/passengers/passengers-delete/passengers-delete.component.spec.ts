import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersDeleteComponent } from './passengers-delete.component';

describe('PassengersDeleteComponent', () => {
  let component: PassengersDeleteComponent;
  let fixture: ComponentFixture<PassengersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
