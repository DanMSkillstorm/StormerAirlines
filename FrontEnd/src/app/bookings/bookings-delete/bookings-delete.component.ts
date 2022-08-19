import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookingsService } from 'src/app/services/get-bookings.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookings-delete',
  templateUrl: './bookings-delete.component.html',
  styleUrls: ['./bookings-delete.component.css']
})
export class BookingsDeleteComponent implements OnInit {
  public deleteBookingForm! : FormGroup;
  constructor(
    private bookingService : GetBookingsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.deleteBookingForm = new FormGroup({
      bookingNumber : new FormControl('', Validators.required)
    });
  }

  submit(){
    this.bookingService.deleteBooking(this.deleteBookingForm.value).subscribe(() => {
      console.log("Booking deleted Successfully!");
    })
    this.router.navigateByUrl('/bookings/bookings-table');
  }

}
