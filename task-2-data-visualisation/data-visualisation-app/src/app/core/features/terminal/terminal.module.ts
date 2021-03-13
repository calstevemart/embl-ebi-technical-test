import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalShellComponent } from './components/terminal-shell/terminal-shell.component';
import { TerminalWrapperComponent } from './views/terminal-wrapper/terminal-wrapper.component';
import { NgTerminalModule } from 'ng-terminal';

@NgModule({
  declarations: [TerminalWrapperComponent, TerminalShellComponent],
  imports: [CommonModule, TerminalRoutingModule, NgTerminalModule],
  exports: [TerminalWrapperComponent, TerminalShellComponent],
})
export class TerminalModule {}
