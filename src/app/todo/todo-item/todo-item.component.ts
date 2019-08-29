import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from './../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputReference', { static: false }) txtInputReference: ElementRef;
  checkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log(this.todo);
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe( () => {
      const toggleTodoAction = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(toggleTodoAction);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputReference.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    const editTodoAction = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(editTodoAction);
  }

  delete() {
    const deleteTodoAction = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(deleteTodoAction);
  }

}
