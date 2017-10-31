import { types } from './actions'

export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export type ITodoPartial = Partial<ITodo>;

export interface ITodoState {
  todos: ITodo[];
}

interface ITodoAction {
  type: types;
  todo: ITodo;
}

export type IAction = ITodoAction;
