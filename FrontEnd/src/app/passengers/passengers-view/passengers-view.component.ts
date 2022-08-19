import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PassengersService } from 'src/app/services/passengers.service';
import { Flight } from 'src/app/flight';
import { Passenger } from 'src/app/passenger';

@Component({
  selector: 'app-passengers-view',
  templateUrl: './passengers-view.component.html',
  styleUrls: ['./passengers-view.component.css']
})
export class PassengersViewComponent implements OnInit {
  id! : number;
  flights! : Flight[];
  passenger! : Passenger;
  

  constructor(
    private passengerService : PassengersService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPassengers();
    console.log(this.passenger)
  }

  getPassengers() : void {
    this.passengerService.getPassenger(this.id).subscribe((data: Passenger) => {
      this.passenger = data;
    });
  }

}