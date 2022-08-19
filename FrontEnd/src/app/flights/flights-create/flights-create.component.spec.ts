import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCreateComponent } from './flights-create.component';

describe('FlightsCreateComponent', () => {
  let component: FlightsCreateComponent;
  let fixture: ComponentFixture<FlightsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
