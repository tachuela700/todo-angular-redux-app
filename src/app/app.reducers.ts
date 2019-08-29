import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducers';
import * as fromFilter from './filter/filter.reducers';
import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
  todoList: Todo[];
  filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todoList: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};

