/**
 * Import actions + action types
 */

import { ITodoState, IAction } from "./interfaces";
import { types as todoTypes, actions } from "./actions";
import { uuidv4 } from '../../../utils/guid';

export const initialState: ITodoState = {
  todos: []
};

export const todoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      action.todo.id = uuidv4();
      return { todos: [...state.todos, action.todo] };
    case todoTypes.UPDATE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id === action.todo.id ? action.todo : todo;
        })
      };
    case todoTypes.DELETE_TODO:
    return {
      todos: state.todos.map(todo => {
        return todo.id !== action.todo.id ? todo : null;
      }).filter(x => x)
    };
    default:
      return state;
  }
};
