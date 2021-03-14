import { Component, OnInit } from '@angular/core';
import { MachineCalculatorService } from 'src/app/core/services/machine-calculator.service';

@Component({
  selector: 'app-machine-calculator-wrapper',
  templateUrl: './machine-calculator-wrapper.component.html',
  styleUrls: ['./machine-calculator-wrapper.component.less'],
})
export class MachineCalculatorWrapperComponent implements OnInit {
  constructor(private machineService: MachineCalculatorService) {}
  serviceResult = '';

  ngOnInit(): void {}

  handleNewTuple($event: string) {
    let req = {
      body: $event,
    };
    this.machineService.postTuples(req).subscribe((resp) => {
      this.serviceResult = resp.toString();
      console.log('Calculator endpoint says: ' + resp);
    });
  }
}
