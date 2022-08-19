import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/flight';
import { FlightsService } from 'src/app/services/flights.service';


@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css']
})
export class FlightsTableComponent implements OnInit {

  flights : Flight[] = [];
  constructor(private flightsService : FlightsService) {}

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() : void {
    this.flightsService.getFlightList().subscribe(data =>{
      this.flights=data;
    })
  }

  deleteFlight(flightNumber : number){
    this.flightsService.deleteFlight(flightNumber).subscribe(() => {
      this.flights = this.flights.filter(data => data.flightNum !== flightNumber);
      console.log("Flight deleted successfully!")
    })
  }
}
