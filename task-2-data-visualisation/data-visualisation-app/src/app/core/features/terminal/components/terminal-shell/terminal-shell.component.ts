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
  /**View child to access ngterminal */
  @ViewChild('term', { static: true })
  child!: NgTerminal;
  /**Event emitter to send new command to parent component */
  @Output()
  newCommandEvent = new EventEmitter<string>();
  /**Result from node server */
  @Input() terminalResult: string = '';
  /**temp variable to store the last returnedvalue from the server */
  lastKnownTerminalResult = '';
  /**Write subject used to write server responses to terminal. */
  writeSubject = new Subject<string>();
  /**Temp variable that builds up a new command char-by-char */
  tempCommand = '';
  /**Finalised command */
  command: any = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.write();
    this.lastKnownTerminalResult = this.terminalResult;
  }

  /**
   * Afterview init. keyEventInput is hit every time the user enters a character.
   * The callback is used to construct a command.
   */
  ngAfterViewInit() {
    this.child.keyEventInput.subscribe((e) => {
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

  /**
   * Used to write the servers response to the ngterminal.
   */
  write() {
    if (
      this.terminalResult !== '' &&
      this.terminalResult !== this.lastKnownTerminalResult
    ) {
      this.child.write(this.terminalResult.trim() + '\n');
    }
  }
}
