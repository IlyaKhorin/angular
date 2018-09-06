import { Action } from '@ngrx/store';

export enum ProgressTypes {
  Start = '[Progress] Start',
  Finish = '[Progress] Finish',
}

export class Start implements Action {
  readonly type = ProgressTypes.Start;
}


export class Finish implements Action {
  readonly type = ProgressTypes.Finish;
}

export type ProgressActionsUnion =
  | Start
  | Finish;
