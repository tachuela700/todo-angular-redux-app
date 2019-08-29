import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions';
import * as fromTodoActions from '../../todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilterActions.validFilters[] = ['All', 'Active', 'Completed'];
  currentFilter: fromFilterActions.validFilters;
  todoPendings: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.countPendings(state.todoList);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: fromFilterActions.validFilters) {
    const setFilterAction = new fromFilterActions.SetFilterAction(newFilter);
    this.store.dispatch(setFilterAction);
  }

  countPendings(todoList: Todo[]) {
    this.todoPendings = todoList.filter(todo => !todo.completed).length;
  }

  deleteAll() {
    const deleteAllTodoAction = new fromTodoActions.DeleteAllTodoAction();
    this.store.dispatch(deleteAllTodoAction);
  }

}
