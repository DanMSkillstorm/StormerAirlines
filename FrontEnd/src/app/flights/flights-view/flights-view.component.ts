import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';
import { Flight } from 'src/app/flight';
import { Passenger } from 'src/app/passenger';

@Component({
  selector: 'app-flights-view',
  templateUrl: './flights-view.component.html',
  styleUrls: ['./flights-view.component.css']
})
export class FlightsViewComponent implements OnInit {
  flightNum! : number;
  flight! : Flight;
  passengers! : Passenger[];
  

  constructor(
    private flightsService : FlightsService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.flightNum = this.route.snapshot.params['id'];
    this.getFlights();
    console.log(this.flight)
  }

  getFlights() : void {
    this.flightsService.getFlight(this.flightNum).subscribe((data: Flight) => {
      this.flight = data;
    });
  }

}
