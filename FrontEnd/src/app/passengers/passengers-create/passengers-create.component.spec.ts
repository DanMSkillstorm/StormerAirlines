import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersCreateComponent } from './passengers-create.component';

describe('PassengersCreateComponent', () => {
  let component: PassengersCreateComponent;
  let fixture: ComponentFixture<PassengersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
