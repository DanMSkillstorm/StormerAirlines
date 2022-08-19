import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengersService } from 'src/app/services/passengers.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-passengers-delete',
  templateUrl: './passengers-delete.component.html',
  styleUrls: ['./passengers-delete.component.css']
})
export class PassengersDeleteComponent implements OnInit{
  public deleteBookingForm! : FormGroup;
  public deletePassengerForm! : FormGroup;
  public deleteFlightForm! : FormGroup;

  constructor(
    private passengerService : PassengersService,
    private router : Router
  ) {}
  
  ngOnInit(): void {
    this.deletePassengerForm = new FormGroup({
      id: new FormControl('',Validators.required)
    });
  }

  get f() { return this.deletePassengerForm.controls; }

  submit(){
    this.passengerService.deletePassenger(this.deletePassengerForm.value).subscribe(() =>{
      console.log("Passenger deleted successfully!");
    })

    this.router.navigateByUrl('/bookings');
  }

}
