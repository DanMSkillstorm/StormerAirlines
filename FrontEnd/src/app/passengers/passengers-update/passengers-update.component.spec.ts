import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersUpdateComponent } from './passengers-update.component';

describe('PassengersUpdateComponent', () => {
  let component: PassengersUpdateComponent;
  let fixture: ComponentFixture<PassengersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
