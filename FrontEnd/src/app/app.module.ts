import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { BookingsTableComponent } from './bookings/bookings-table/bookings-table.component';
import { FlightsTableComponent } from './flights/flights-table/flights-table.component';
import { FlightsCreateComponent } from './flights/flights-create/flights-create.component';
import { FlightsUpdateComponent } from './flights/flights-update/flights-update.component';
import { FlightsDeleteComponent } from './flights/flights-delete/flights-delete.component';
import { PassengersTableComponent } from './passengers/passengers-table/passengers-table.component';
import { PassengersCreateComponent } from './passengers/passengers-create/passengers-create.component';
import { PassengersUpdateComponent } from './passengers/passengers-update/passengers-update.component';
import { PassengersDeleteComponent } from './passengers/passengers-delete/passengers-delete.component';
import { BookingsCreateComponent } from './bookings/bookings-create/bookings-create.component';
import { BookingsUpdateComponent } from './bookings/bookings-update/bookings-update.component';
import { BookingsDeleteComponent } from './bookings/bookings-delete/bookings-delete.component';
import { BookingsHomeComponent } from './bookings/bookings-home/bookings-home.component';
import { PassengersHomeComponent } from './passengers/passengers-home/passengers-home.component';
import { FlightsHomeComponent } from './flights/flights-home/flights-home.component';
import { FlightsViewComponent } from './flights/flights-view/flights-view.component';
import { PassengersViewComponent } from './passengers/passengers-view/passengers-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsTableComponent,
    BookingsTableComponent,
    FlightsTableComponent,
    FlightsCreateComponent,
    FlightsUpdateComponent,
    FlightsDeleteComponent,
    PassengersTableComponent,
    PassengersCreateComponent,
    PassengersUpdateComponent,
    PassengersDeleteComponent,
    BookingsCreateComponent,
    BookingsUpdateComponent,
    BookingsDeleteComponent,
    BookingsHomeComponent,
    PassengersHomeComponent,
    FlightsHomeComponent,
    FlightsViewComponent,
    PassengersViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
