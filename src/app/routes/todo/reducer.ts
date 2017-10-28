/**
 * Import actions + action types
 */

import { types as todoTypes } from './actions';

export interface TodoState {
  todos: any[];
}

export const initialState: TodoState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return { todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};
