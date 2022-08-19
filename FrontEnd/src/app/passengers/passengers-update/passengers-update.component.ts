import { Component, OnInit } from '@angular/core';
import { PassengersService } from 'src/app/services/passengers.service';
import { Passenger } from 'src/app/passenger';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-passengers-update',
  templateUrl: './passengers-update.component.html',
  styleUrls: ['./passengers-update.component.css']
})

export class PassengersUpdateComponent implements OnInit {
  public updatePassengerForm! : FormGroup;
  id!: number;
  pas! : Passenger;
  
  constructor(
    private passengerService : PassengersService,
    private route : ActivatedRoute,
    private router : Router
  ) {}
  
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.passengerService.getPassenger(this.id).subscribe((data: Passenger)=>{
      this.pas = data;
    }); 

    this.updatePassengerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });

    this.updatePassengerForm.controls['id'].setValue(this.id)
  }



  get f() { return this.updatePassengerForm.controls; }

  checkForEmpties(){
    if(this.updatePassengerForm.controls['firstName'].value == ""){
      this.updatePassengerForm.controls['firstName'].setValue(this.pas.firstName);
    }
    if(this.updatePassengerForm.controls['lastName'].value == ""){
      this.updatePassengerForm.controls['lastName'].setValue(this.pas.lastName);
    }
    if(this.updatePassengerForm.controls['job'].value == ""){
      this.updatePassengerForm.controls['job'].setValue(this.pas.job);
    }
    if(this.updatePassengerForm.controls['age'].value == ""){
      this.updatePassengerForm.controls['age'].setValue(this.pas.age);
    }
  }

  submit(){
    this.checkForEmpties();
    console.log(this.updatePassengerForm.value);
    console.log(this.updatePassengerForm.valid);
    this.passengerService.updatePassenger(this.id, this.updatePassengerForm.value).subscribe(() =>{
      console.log(this.updatePassengerForm.value);
      console.log(this.updatePassengerForm.valid);
      console.log("Passenger updated successfully!");
    })

    this.router.navigateByUrl('passengers');
  }

}