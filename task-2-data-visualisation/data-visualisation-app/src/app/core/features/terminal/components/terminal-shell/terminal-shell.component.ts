import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
@Component({
  selector: 'app-terminal-shell',
  templateUrl: './terminal-shell.component.html',
  styleUrls: ['./terminal-shell.component.less'],
})
export class TerminalShellComponent implements OnInit, AfterViewInit {
  @ViewChild('term', { static: true })
  child!: NgTerminal;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.child?.keyEventInput.subscribe((e) => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);

      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this.child?.write('\r\n$ ');
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.child.underlying.buffer.active.cursorX > 2) {
          this.child.write('\b \b');
        }
      } else if (printable) {
        this.child.write(e.key);
      }
    });
  }
}
