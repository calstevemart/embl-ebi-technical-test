import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'src/app/core/services/terminal.service';

@Component({
  selector: 'app-terminal-wrapper',
  templateUrl: './terminal-wrapper.component.html',
  styleUrls: ['./terminal-wrapper.component.less'],
})
export class TerminalWrapperComponent implements OnInit {
  constructor(private terminalService: TerminalService) {}

  ngOnInit(): void {
    this.pingTerminal();
  }

  pingTerminal() {
    this.terminalService.getStatus().subscribe((resp) => {
      console.log('Server says: ' + resp);
    });
  }
}
