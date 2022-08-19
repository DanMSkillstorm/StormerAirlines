import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookingsService } from 'src/app/services/get-bookings.service';
import { PassengersService } from 'src/app/services/passengers.service'; 
import { FlightsService } from 'src/app/services/flights.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-flights-delete',
  templateUrl: './flights-delete.component.html',
  styleUrls: ['./flights-delete.component.css']
})
export class FlightsDeleteComponent implements OnInit {
  public deleteFlightForm! : FormGroup;

  constructor(
    private flightService : FlightsService,
    private router : Router
  ) {}
  
  ngOnInit(): void {    
    this.deleteFlightForm = new FormGroup({
      flightNumber : new FormControl('', Validators.required)
    });
  }

  submit(){
    this.flightService.deleteFlight(this.deleteFlightForm.value).subscribe(() =>{
      console.log("Flight deleted successfully!");
    })

    this.router.navigateByUrl('/bookings');
  }

}

