import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsUpdateComponent } from './bookings-update.component';

describe('BookingsUpdateComponent', () => {
  let component: BookingsUpdateComponent;
  let fixture: ComponentFixture<BookingsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
