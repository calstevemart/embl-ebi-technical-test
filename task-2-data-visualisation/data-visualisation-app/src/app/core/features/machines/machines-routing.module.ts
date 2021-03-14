import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineCalculatorWrapperComponent } from './views/machine-calculator-wrapper/machine-calculator-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: MachineCalculatorWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesRoutingModule {}
