import { Injectable } from '@angular/core';
import { Booking } from '../booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetBookingsService {
  readonly _API_URL = "https://localhost:7075/api"
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };
  constructor(
    private http:HttpClient
  ) { }

  getBookingList():Observable<Booking[]>{
     return this.http.get<Booking[]> (this._API_URL + '/Bookings');
  }

  getBooking(bookingNum : number){
    return this.http.get<Booking>(this._API_URL + '/Bookings/' + bookingNum, this.httpOptions)
  }

  addBooking(passengerId: number, flightNum: number){
    return this.http.post(this._API_URL + '/Passengers/' + passengerId + '/Flight/' + flightNum, this.httpOptions);
  }

  updateBooking(bookingNum : number, booking : Booking){
    return this.http.put(this._API_URL + '/Bookings/' + bookingNum, booking, this.httpOptions);
  }

  deleteBooking(bookingNum : number){
    return this.http.delete(this._API_URL + '/Bookings/' + bookingNum, this.httpOptions)
  }
}
