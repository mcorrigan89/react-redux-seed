import { connect } from 'react-redux';

import { RootState } from '../../../store/rootReducer';
import { actions as todoActions } from './actions';
import { ITodo } from './interfaces';

import { Todo } from './Todo';

const mapStateToProps = ({ todo }: RootState) => ({
  todos: todo.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo: ITodo) => dispatch(todoActions.addTodo(todo)),
  updateTodo: (todo: ITodo) => dispatch(todoActions.updateTodo(todo)),
  deleteTodo: (todo: ITodo) => dispatch(todoActions.deleteTodo(todo)),
});

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
