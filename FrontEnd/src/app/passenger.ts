import { Flight } from "./flight"

export class Passenger {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public job: string,
        public email: string,
        public age: number,
        public bookedFlights : Flight[] 
    ) { }
}
