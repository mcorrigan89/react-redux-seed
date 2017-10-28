/*
 *  To avoid having to import individual actions/types, we want to
 *  export two objects from this file:
 *  1. Types
 *  2. Actions
 */

/**
 * 1. Add + export type constants
 */

const ADD_TODO = 'ADD_TODO';

export const types = {
  ADD_TODO
};

/**
 * 2. Add + export actions/action creators
 */

const addTodo = todo => ({
  type: types.ADD_TODO,
  todo
});

export const actions = {
  addTodo
};
