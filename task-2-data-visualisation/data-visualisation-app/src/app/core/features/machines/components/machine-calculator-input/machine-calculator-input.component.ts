import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-machine-calculator-input',
  templateUrl: './machine-calculator-input.component.html',
  styleUrls: ['./machine-calculator-input.component.less'],
})
export class MachineCalculatorInputComponent implements OnInit {
  @Input() serviceResult: string = '';
  @Output() newTupleEvent = new EventEmitter<any>();
  userInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  triggerNewTupleEvent() {
    this.newTupleEvent.emit(this.userInput);
  }
}
