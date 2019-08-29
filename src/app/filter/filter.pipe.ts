import { Todo } from './../todo/models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilterActions from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todoList: Todo[], filter: fromFilterActions.validFilters): Todo[] {
    // console.log(todoList);
    // console.log(filter);

    switch (filter) {
      case 'Completed':
        return todoList.filter( todo => todo.completed);
      case 'Active':
        return todoList.filter(todo => !todo.completed);

      default:
        return todoList;
    }

  }

}
