import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsHomeComponent } from './bookings/bookings-home/bookings-home.component';
import { BookingsTableComponent } from './bookings/bookings-table/bookings-table.component';
import { BookingsCreateComponent } from './bookings/bookings-create/bookings-create.component';
import { BookingsDeleteComponent } from './bookings/bookings-delete/bookings-delete.component';
import { BookingsUpdateComponent } from './bookings/bookings-update/bookings-update.component';

import { PassengersHomeComponent } from './passengers/passengers-home/passengers-home.component';
import { PassengersTableComponent } from './passengers/passengers-table/passengers-table.component';
import { PassengersCreateComponent } from './passengers/passengers-create/passengers-create.component';
import { PassengersDeleteComponent } from './passengers/passengers-delete/passengers-delete.component';
import { PassengersUpdateComponent } from './passengers/passengers-update/passengers-update.component';
import { PassengersViewComponent } from './passengers/passengers-view/passengers-view.component';
import { FlightsHomeComponent } from './flights/flights-home/flights-home.component';
import { FlightsTableComponent } from './flights/flights-table/flights-table.component';
import { FlightsCreateComponent } from './flights/flights-create/flights-create.component';
import { FlightsDeleteComponent } from './flights/flights-delete/flights-delete.component';
import { FlightsUpdateComponent } from './flights/flights-update/flights-update.component';
import { FlightsViewComponent } from './flights/flights-view/flights-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'bookings', component: BookingsHomeComponent, children:[]},
  {path: 'passengers', component: PassengersHomeComponent},
  {path: 'flights', component: FlightsHomeComponent},

  {path: 'bookings/bookings-table', component: BookingsTableComponent},
  {path: 'bookings/bookings-create', component: BookingsCreateComponent},
  {path: 'bookings/bookings-delete', component: BookingsDeleteComponent},
  {path: 'bookings/:bookingNum/edit', component: BookingsUpdateComponent},

  {path: 'passengers/passengers-table', component: PassengersTableComponent},
  {path: 'passengers/passengers-create', component: PassengersCreateComponent},
  {path: 'passengers/passengers-delete', component: PassengersDeleteComponent},
  {path: 'passengers/:id/edit', component: PassengersUpdateComponent},
  {path: 'passengers/:id/view', component: PassengersViewComponent},

  {path: 'flights/flights-table', component: FlightsTableComponent},
  {path: 'flights/flights-create', component: FlightsCreateComponent},
  {path: 'flights/flights-delete', component: FlightsDeleteComponent},
  {path: 'flights/:id/edit', component: FlightsUpdateComponent},
  {path: 'flights/:id/view', component: FlightsViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
