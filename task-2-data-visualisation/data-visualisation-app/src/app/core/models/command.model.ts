export interface FlagObject {
  flag: string;
  value: string;
}

export interface Command {
  command: string;
  flags: FlagObject[];
}
