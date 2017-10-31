import { ITodo } from './interfaces';
import { actions, types } from './actions';

const fakeTodo: ITodo = {
    id: "one",
    text: "blahblah",
    completed: false
  };

describe('todo actions', () => {
    test('addTodo()', () => {
        let action = actions.addTodo(fakeTodo);
        expect(action).toEqual({type: types.ADD_TODO, todo: fakeTodo});
    });

    test('updateTodo()', () => {
        let action = actions.updateTodo(fakeTodo);
        expect(action).toEqual({type: types.UPDATE_TODO, todo: fakeTodo});
    })

    test('deleteTodo()', () => {
        let action = actions.deleteTodo(fakeTodo);
        expect(action).toEqual({type: types.DELETE_TODO, todo: fakeTodo});
    })
});
