import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-machine-calculator-input',
  templateUrl: './machine-calculator-input.component.html',
  styleUrls: ['./machine-calculator-input.component.less'],
})
export class MachineCalculatorInputComponent implements OnInit {
  /**Result of the machine calculation from the server. */
  @Input() serviceResult: string = '';
  /**Emits a new set of tuples to the parent component for onward travel to the API. */
  @Output() newTupleEvent = new EventEmitter<any>();
  /**The user input tuples that represent time spans. */
  userInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  /**Trigger the tuple emitter. */
  triggerNewTupleEvent() {
    this.newTupleEvent.emit(this.userInput);
  }
}
