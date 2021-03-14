import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCalculatorWrapperComponent } from './machine-calculator-wrapper.component';

describe('MachineCalculatorWrapperComponent', () => {
  let component: MachineCalculatorWrapperComponent;
  let fixture: ComponentFixture<MachineCalculatorWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineCalculatorWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCalculatorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
