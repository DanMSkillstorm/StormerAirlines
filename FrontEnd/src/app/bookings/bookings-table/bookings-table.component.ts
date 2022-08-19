import { Component, OnInit } from '@angular/core';
import { GetBookingsService } from '../../services/get-bookings.service';
import { Booking } from '../../booking';


@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.css']
})
export class BookingsTableComponent implements OnInit {

  bookings : Booking[] = [];
  constructor(private getBookingsService : GetBookingsService) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() : void {
    this.getBookingsService.getBookingList().subscribe(data =>{
      this.bookings=data;
    })
  }
  deleteBooking(bookingNum:number){
    this.getBookingsService.deleteBooking(bookingNum).subscribe(() => {
         this.bookings = this.bookings.filter(data => data.bookingNum !== bookingNum);
         console.log("Booking deleted Successfully!");
    })
  }

}
