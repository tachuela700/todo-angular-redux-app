import * as fromTodoActions from './todo.actions';
import { Todo } from './models/todo.model';

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: fromTodoActions.todoActions): Todo[] {
    switch (action.type) {
      case fromTodoActions.ADD_TODO:
        const todo = new Todo(action.text);
        return [...state, todo];

      case fromTodoActions.EDIT_TODO:
        return state.map(todoEdit => {
          if (todoEdit.id === action.id) {
            return {
              ...todoEdit,
              text: action.text
            };
          } else {
            return todoEdit;
          }
        });

      case fromTodoActions.DELETE_TODO:
        return state.filter(todoEdit => todoEdit.id !== action.id);

      case fromTodoActions.DELETE_ALL_TODO:
        return state.filter(todoEdit => !todoEdit.completed);

      case fromTodoActions.TOGGLE_TODO:
        return state.map(todoEdit => {
          if (todoEdit.id === action.id) {
            return {
              ...todoEdit,
              completed: !todoEdit.completed
            };
          } else {
            return todoEdit;
          }
        });

      case fromTodoActions.TOGGLE_ALL_TODO:
        return state.map(todoEdit => {
          return {
            ...todoEdit,
            completed: action.completed
          };
        });

      default:
        return state;
    }
}
