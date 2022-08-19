import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsDeleteComponent } from './bookings-delete.component';

describe('BookingsDeleteComponent', () => {
  let component: BookingsDeleteComponent;
  let fixture: ComponentFixture<BookingsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
