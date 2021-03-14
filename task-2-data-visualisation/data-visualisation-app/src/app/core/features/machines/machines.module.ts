import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MachineCalculatorInputComponent } from './components/machine-calculator-input/machine-calculator-input.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachineCalculatorWrapperComponent } from './views/machine-calculator-wrapper/machine-calculator-wrapper.component';

@NgModule({
  declarations: [
    MachineCalculatorInputComponent,
    MachineCalculatorWrapperComponent,
  ],
  imports: [MachinesRoutingModule, CommonModule, FormsModule],
  exports: [MachineCalculatorInputComponent, MachineCalculatorWrapperComponent],
})
export class MachinesModule {}
