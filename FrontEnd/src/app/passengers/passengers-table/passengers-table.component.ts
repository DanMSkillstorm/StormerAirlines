import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/passenger';
import { PassengersService } from 'src/app/services/passengers.service';

@Component({
  selector: 'app-passengers-table',
  templateUrl: './passengers-table.component.html',
  styleUrls: ['./passengers-table.component.css']
})

export class PassengersTableComponent implements OnInit {

  passengers : Passenger[] = [];
  constructor(private PassengersService : PassengersService) {}

  ngOnInit(): void {
    
    this.getPassengers();
  }

  getPassengers() : void {
    this.PassengersService.getPassengerList().subscribe(data =>{
      this.passengers=data;
    })
    
  }

  deletePassenger(id:number){
    this.PassengersService.deletePassenger(id).subscribe(() => {
         this.passengers = this.passengers.filter(data => data.id !== id);
         console.log("Passenger deleted Successfully!");
    })
  }
}
