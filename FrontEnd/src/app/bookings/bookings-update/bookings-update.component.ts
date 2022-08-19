import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking';
import { GetBookingsService } from 'src/app/services/get-bookings.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookings-update',
  templateUrl: './bookings-update.component.html',
  styleUrls: ['./bookings-update.component.css']
})
export class BookingsUpdateComponent implements OnInit {

  public updateBookingForm! : FormGroup;
  bookingNum! : number;
  booking! : Booking;

  constructor(
    private bookingService : GetBookingsService,
    private route : ActivatedRoute,
    private router : Router
  ) { }
    
  ngOnInit(): void {

    this.bookingNum = this.route.snapshot.params['bookingNum'];
    this.bookingService.getBooking(this.bookingNum).subscribe((data: Booking)=>{
      this.booking = data;
    }); 

    this.updateBookingForm = new FormGroup({
      passengerId : new FormControl('', Validators.required),
      flightNumber : new FormControl('', Validators.required),
      bookingNum : new FormControl('',Validators.required)
    });
    this.updateBookingForm.controls['bookingNum'].setValue(this.bookingNum);
    console.log()
  }
  
    get f() { return this.updateBookingForm.controls; }
  
    submit(){
      console.log(this.bookingNum)
      console.log(this.updateBookingForm.value);
      console.log(this.updateBookingForm.valid);
      console.log("Booking update attempted");
      this.bookingService.updateBooking(this.bookingNum, this.updateBookingForm.value).subscribe(() =>{
        console.log(this.updateBookingForm.value);
        console.log(this.updateBookingForm.valid);
        console.log("Booking updated successfully!");
      })
  
      this.router.navigateByUrl('bookings');
    }
  
  }
  
  
