import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengersService } from 'src/app/services/passengers.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-passengers-create',
  templateUrl: './passengers-create.component.html',
  styleUrls: ['./passengers-create.component.css']
})
export class PassengersCreateComponent implements OnInit{
  public createPassenger! : FormGroup;

  constructor(
    private passengerService : PassengersService,
    private router : Router
  ) {}
  
  ngOnInit(): void {
    this.createPassenger = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  get f() { return this.createPassenger.controls; }

  submit(){
    this.passengerService.addPassenger(this.createPassenger.value).subscribe(() =>{
      console.log(this.createPassenger.value);
      console.log(this.createPassenger.valid);
      console.log("Passenger created successfully!");
    })

    this.router.navigateByUrl('passengers');
  }

}
