import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDeleteComponent } from './flights-delete.component';

describe('FlightsDeleteComponent', () => {
  let component: FlightsDeleteComponent;
  let fixture: ComponentFixture<FlightsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
