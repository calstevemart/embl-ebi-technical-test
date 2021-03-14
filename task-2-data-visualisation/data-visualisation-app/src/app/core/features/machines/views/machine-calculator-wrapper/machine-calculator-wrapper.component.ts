import { Component, OnInit } from '@angular/core';
import { MachineCalculatorService } from 'src/app/core/services/machine-calculator.service';

@Component({
  selector: 'app-machine-calculator-wrapper',
  templateUrl: './machine-calculator-wrapper.component.html',
  styleUrls: ['./machine-calculator-wrapper.component.less'],
})
export class MachineCalculatorWrapperComponent implements OnInit {
  constructor(private machineService: MachineCalculatorService) {}
  /**Result from the flask api */
  serviceResult = '';

  ngOnInit(): void {}

  /**Triggered when the user hits send. Sends the tuple set to the api. */
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
