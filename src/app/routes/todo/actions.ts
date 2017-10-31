import { IAction, ITodo } from './interfaces';

/*
 *  To avoid having to import individual actions/types, we want to
 *  export two objects from this file:
 *  1. Types
 *  2. Actions
 */

/**
 * 1. Add + export type constants
 */

export enum types {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SET_TODO_COMPLETION = 'SET_TODO_COMPLETION'
};

/**
 * 2. Add + export actions/action creators
 */

const addTodo = (todo: ITodo): IAction => ({
  type: types.ADD_TODO,
  todo
});

const updateTodo = (todo: ITodo): IAction => ({
  type: types.UPDATE_TODO,
  todo
});

const deleteTodo = (todo: ITodo): IAction => ({
  type: types.DELETE_TODO,
  todo
});

export const actions = {
  addTodo,
  updateTodo,
  deleteTodo
};
