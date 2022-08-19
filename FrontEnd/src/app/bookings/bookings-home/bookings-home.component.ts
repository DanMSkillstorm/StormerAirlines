import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
@Component({
  selector: 'app-bookings-home',
  templateUrl: './bookings-home.component.html',
  styleUrls: ['./bookings-home.component.css']
})
export class BookingsHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
