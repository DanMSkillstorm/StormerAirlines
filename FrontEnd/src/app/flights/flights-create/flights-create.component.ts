import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookingsService } from 'src/app/services/get-bookings.service';
import { PassengersService } from 'src/app/services/passengers.service'; 
import { FlightsService } from 'src/app/services/flights.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-flights-create',
  templateUrl: './flights-create.component.html',
  styleUrls: ['./flights-create.component.css']
})
export class FlightsCreateComponent implements OnInit {

  public createFlightForm! : FormGroup;

  constructor(
    private flightService : FlightsService,
    private router : Router
  ) {}
  
  ngOnInit(): void {
    this.createFlightForm = new FormGroup({
      depLocation : new FormControl('', Validators.required),
      arrLocation : new FormControl('', Validators.required),
      passengerLimit : new FormControl('', Validators.required),
      depDate : new FormControl('', Validators.required),
      depTime : new FormControl('', Validators.required),
      arrDate : new FormControl('', Validators.required),
      arrTime : new FormControl('', Validators.required)
    });
    
    this.createFlightForm.controls['passengerLimit'].setValue(2)
  }

  get f() { return this.createFlightForm.controls; }

  submit(){
    ;
    this.flightService.addFlight(this.createFlightForm.value).subscribe(() =>{
      console.log(this.createFlightForm.value);
      console.log(this.createFlightForm.valid);
      console.log("Flight created successfully!");
    })

    this.router.navigateByUrl('flights');
  }

}
