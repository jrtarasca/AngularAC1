import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcIMC } from './calc-imc';

describe('CalcIMC', () => {
  let component: CalcIMC;
  let fixture: ComponentFixture<CalcIMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcIMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcIMC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
