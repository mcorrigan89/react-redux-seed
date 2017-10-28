import { combineReducers } from 'redux';

/*
 *  Motivation:
 *      To keep our application scalable, we will be leveraging reducer composition.
 *      Since actions travel through every reducer, our setup will allow us to
 *      add/remove/update reducers as necssary - allowing for a loosely coupled
 *      application.
 *
 *  Usage
 *    1. Import top level reducers
 *    2. Combine to create 1 root reducer
*/

// =================================
// Top Level Routes/Components
// =================================
import { todoReducer, TodoState } from '../app/routes/todo';

/**
 * This is a statically typed global (top level) state tree
 *  - It should be imported in connected components providing 
 *    type safety to a Redux connect function
 */
export interface RootState {
  todo: TodoState;
}

export const rootReducer = combineReducers<RootState>({
  todo: todoReducer
});
