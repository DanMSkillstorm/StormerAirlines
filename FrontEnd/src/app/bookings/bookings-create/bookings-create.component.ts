import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookingsService } from 'src/app/services/get-bookings.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-bookings-create',
  templateUrl: './bookings-create.component.html',
  styleUrls: ['./bookings-create.component.css']
})
export class BookingsCreateComponent implements OnInit {
  public createBooking! : FormGroup;
  _passengerId! : number;
  _flightNum! : number;

  constructor(
    private bookingService : GetBookingsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createBooking = new FormGroup({
      passengerId: new FormControl('passengerId', Validators.required),
      flightNum: new FormControl('flightNum', Validators.required)
    });

  }


  submit(){
    
    this._passengerId = this.createBooking.controls['passengerId'].value
    this._flightNum = this.createBooking.controls['flightNum'].value;
    console.log(this._passengerId, this._flightNum)

    this.bookingService.addBooking(this._passengerId, this._flightNum).subscribe(() => {
      console.log(this.createBooking.value);
      console.log(this.createBooking.valid);
      console.log("Booking created successfully!")
    })
    this.router.navigateByUrl('/bookings');
  }

}
