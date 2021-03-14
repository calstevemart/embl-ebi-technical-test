import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-terminal-shell',
  templateUrl: './terminal-shell.component.html',
  styleUrls: ['./terminal-shell.component.less'],
})
export class TerminalShellComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('term', { static: true })
  child!: NgTerminal;

  @Output()
  newCommandEvent = new EventEmitter<string>();

  @Input() terminalResult: string = '';

  lastKnownTerminalResult = '';
  writeSubject = new Subject<string>();

  tempCommand = '';
  command: any = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('hit shell on changes');
    this.write();
    this.lastKnownTerminalResult = this.terminalResult;
  }

  ngAfterViewInit() {
    this.child.keyEventInput.subscribe((e) => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
      if (
        e.key !== ' [A' &&
        e.key !== ' [B' &&
        e.key !== ' [C' &&
        e.key !== ' [D' &&
        e.domEvent.keyCode !== 8
      ) {
        this.tempCommand = this.tempCommand.concat(e.key);
      }
      if (e.domEvent.keyCode === 8) {
        this.tempCommand = this.tempCommand.substr(
          0,
          this.tempCommand.length - 1
        );
      }
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this.command = this.tempCommand;
        this.tempCommand = '';
        this.newCommandEvent.emit(this.command);
        this.child.write('\r\n$ ');
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

  write() {
    if (
      this.terminalResult !== '' &&
      this.terminalResult !== this.lastKnownTerminalResult
    ) {
      this.child.write(this.terminalResult.trim() + '\n');
    }
  }
}
