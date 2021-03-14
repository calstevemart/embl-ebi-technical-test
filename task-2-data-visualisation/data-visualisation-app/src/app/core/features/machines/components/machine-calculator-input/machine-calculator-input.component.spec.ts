import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCalculatorInputComponent } from './machine-calculator-input.component';

describe('MachineCalculatorInputComponent', () => {
  let component: MachineCalculatorInputComponent;
  let fixture: ComponentFixture<MachineCalculatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineCalculatorInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCalculatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
