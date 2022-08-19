import { Time } from "@angular/common";
import { Passenger } from "./passenger";

export class Flight {
    constructor(
        public flightNum: number,
        public depLocation : string,
        public arrLocation : string,
        public passengerLimit : number = 2,
        public passengerCount : number,
        public depDate : string,
        public arrDate : string,
        public depTime : string,
        public arrTime : string,
        public bookedPassengers : Passenger[]
    ) { }
}
