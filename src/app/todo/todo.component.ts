import { ToggleAllTodoAction } from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completedAll: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completedAll = !this.completedAll;
    const toggleAllTodoAction = new ToggleAllTodoAction(this.completedAll);
    this.store.dispatch(toggleAllTodoAction);
  }

}
