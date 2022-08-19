import { Injectable } from '@angular/core';
import { Flight } from '../flight';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  readonly _API_URL = "https://localhost:7075/api"
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };
  constructor(
    private http:HttpClient
  ) { }

  getFlightList():Observable<Flight[]>{
    return this.http.get<Flight[]> (this._API_URL + '/Flights');
  
  }

  getFlight(flightNum:number){
    return this.http.get<Flight>(this._API_URL + '/Flights/'+ flightNum, this.httpOptions);
  }

  addFlight(flight:Flight){
    return this.http.post<Flight>(this._API_URL + '/Flights', flight, this.httpOptions);
  }

  updateFlight(flightNum : number, flight: Flight): Observable<Flight> {
    return this.http.put<Flight>(this._API_URL + '/Flights/' + flightNum, flight, this.httpOptions);
  }
  deleteFlight(flightNum: number): Observable<Flight> {
    return this.http.delete<Flight>(this._API_URL + '/Flights/' + flightNum, this.httpOptions);
  }
}
