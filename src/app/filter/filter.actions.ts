import { Action } from "@ngrx/store";

export const SET_FILTER = '[FILTER] Set filter';

export type validFilters = 'All' | 'Active' | 'Completed';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: validFilters) { }
}

export type filterActions = SetFilterAction;
