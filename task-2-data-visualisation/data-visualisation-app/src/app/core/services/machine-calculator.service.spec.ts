import { TestBed } from '@angular/core/testing';

import { MachineCalculatorService } from './machine-calculator.service';

describe('MachineCalculatorService', () => {
  let service: MachineCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
