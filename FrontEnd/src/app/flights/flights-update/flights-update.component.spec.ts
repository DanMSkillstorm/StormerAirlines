import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsUpdateComponent } from './flights-update.component';

describe('FlightsUpdateComponent', () => {
  let component: FlightsUpdateComponent;
  let fixture: ComponentFixture<FlightsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
