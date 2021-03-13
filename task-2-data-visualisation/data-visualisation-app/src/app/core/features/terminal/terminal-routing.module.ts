import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalWrapperComponent } from './views/terminal-wrapper/terminal-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: TerminalWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminalRoutingModule {}
