import { Passenger } from "./passenger";
import { Flight } from "./flight";
export class Booking {
    constructor(
        public bookingNum : number,
        public passengerId : number,
        public flightNum : number
    ) {}
}
