import { Component, OnInit } from '@angular/core';
import { FlagObject } from 'src/app/core/models/command.model';
import { TerminalService } from 'src/app/core/services/terminal.service';

@Component({
  selector: 'app-terminal-wrapper',
  templateUrl: './terminal-wrapper.component.html',
  styleUrls: ['./terminal-wrapper.component.less'],
})
export class TerminalWrapperComponent implements OnInit {
  /**Response from the server after command handling */
  serverResponse: string = '';
  /**Warning text to tell the user off for bad input */
  warningText = '';

  constructor(private terminalService: TerminalService) {}

  ngOnInit(): void {}

  /**
   * Process a command and send it. Currently unfinished as need some complex logic
   * to handle whitespace in input strings.
   * @param $event - a command as a string
   */
  processCommand($event: string) {
    console.log($event);
    let command = {};
    let deconstructed = $event.split(' ');
    console.log(deconstructed);

    // single arg command building ie 'ls'
    if (deconstructed.length === 1) {
      // if the only arg is empty this means nothing was entered
      if (deconstructed[0].length === 1) {
        this.warningText = 'No command entered.';
      } else {
        this.warningText = '';
        command = {
          command: deconstructed[0].substr(0, deconstructed[0].length - 1),
          flags: [],
        };
        this.postCommand(command);
      }
    } else {
      // Sanitsation commad buiding
      if (deconstructed[0] === './sanitise.sh') {
        // command currently busted until I can figure out how to account for whitespace
        // command = this.buildSanitiseCommand(deconstructed);
        this.postCommand({ command: $event, flags: [] });
      }
      // Any other command building
      else {
      }
    }
  }

  /**
   * Build a 'sanitise' command. This is currently not fully implemented, as i need
   * some complex logic for whitespace handling in the input string.
   * @param constituentArray - The array containing all the constituent parts of the command.
   */
  buildSanitiseCommand(constituentArray: string[]) {
    let baseCommand = constituentArray[0];
    let flags: FlagObject[] = [];

    if (constituentArray.length > 2) {
      let flagObj = {
        flag: constituentArray[1],
        value: constituentArray[2],
      };
      flags.push(flagObj);
      if (constituentArray.length > 4) {
        let flagObj2 = {
          flag: constituentArray[3],
          value: constituentArray[4],
        };
        flags.push(flagObj2);
      }
    }
    return {
      command: baseCommand,
      flags: flags,
    };
  }

  /**Ping the 'terminal' server */
  pingTerminal() {
    this.terminalService.getStatus().subscribe((resp) => {});
  }

  /**Post a command to the server
   * @param command - a command object
   */
  postCommand(command?: any) {
    this.terminalService.postCommand(command).subscribe((resp) => {
      this.serverResponse = resp.toString();
      console.log('Sanitation Endpoint says: ' + resp);
    });
  }
}
