import { Injectable } from '@angular/core';
import { Passenger } from '../passenger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  readonly _API_URL = "https://localhost:7075/api"
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };
  constructor(
    private http:HttpClient
  ) { }

  getPassengerList():Observable<Passenger[]>{
    return this.http.get<Passenger[]> (this._API_URL + '/Passengers');
  }

  getPassenger(id:number){
    return this.http.get<Passenger>(this._API_URL + '/Passengers/'+ id, this.httpOptions);
  }

  addPassenger(passenger:Passenger){
    return this.http.post<Passenger>(this._API_URL + '/Passengers', passenger, this.httpOptions);
  }

  updatePassenger(id:number, passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(this._API_URL + '/Passengers/'+ id, passenger, this.httpOptions);
  }
  deletePassenger(id: number): Observable<Passenger> {
    return this.http.delete<Passenger>(this._API_URL + '/Passengers/'+ id, this.httpOptions);
  }
}
