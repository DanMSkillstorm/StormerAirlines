import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/flight';
import { FlightsService } from 'src/app/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights-update',
  templateUrl: './flights-update.component.html',
  styleUrls: ['./flights-update.component.css']
})
export class FlightsUpdateComponent implements OnInit {
  public updateFlightForm! : FormGroup;
  flightNum! :number;
  flight! : Flight;


  constructor(
    private flightService : FlightsService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.flightNum = this.route.snapshot.params['id'];

    this.flightService.getFlight(this.flightNum).subscribe((data: Flight) => {
      this.flight = data;
    });
 
    this.updateFlightForm = new FormGroup({
      flightNum : new FormControl('', Validators.required),
      depLocation : new FormControl('', Validators.required),
      arrLocation : new FormControl('', Validators.required),
      passengerLimit : new FormControl('', Validators.required),
      depDate : new FormControl('', Validators.required),
      arrDate : new FormControl('', Validators.required),
      depTime : new FormControl('', Validators.required),
      arrTime : new FormControl('', Validators.required),
    });
    this.updateFlightForm.controls['flightNum'].setValue(this.flightNum)
  }

  get f() { return this.updateFlightForm.controls; }
 
  checkForEmpties(){
    if(this.updateFlightForm.controls['depLocation'].value == ""){
      this.updateFlightForm.controls['depLocation'].setValue(this.flight.depLocation);
    }
    if(this.updateFlightForm.controls['arrLocation'].value == ""){
      this.updateFlightForm.controls['arrLocation'].setValue(this.flight.arrLocation);
    }
    if(this.updateFlightForm.controls['passengerLimit'].value == ""){
      this.updateFlightForm.controls['passengerLimit'].setValue(this.flight.passengerLimit);
    }
    if(this.updateFlightForm.controls['depTime'].value == ""){
      this.updateFlightForm.controls['depTime'].setValue(this.flight.depTime);
    }
    if(this.updateFlightForm.controls['depDate'].value == ""){
      this.updateFlightForm.controls['depDate'].setValue(this.flight.arrDate);
    }
    if(this.updateFlightForm.controls['arrTime'].value == ""){
      this.updateFlightForm.controls['arrTime'].setValue(this.flight.arrTime);
    }
    if(this.updateFlightForm.controls['arrDate'].value == ""){
      this.updateFlightForm.controls['arrDate'].setValue(this.flight.arrDate);
    }
  }

  submit(){
    this.checkForEmpties();
    this.flightService.updateFlight(this.flightNum, this.updateFlightForm.value).subscribe(() => {
      console.log(this.updateFlightForm.value);
      console.log(this.updateFlightForm.valid);
      console.log("Flight updated successfully!");
    })
    this.router.navigateByUrl('flights')
  }
}
