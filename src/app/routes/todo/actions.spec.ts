import { actions, types } from './actions';

describe('todo actions', () => {
    test('actions', () => {
        let action = actions.addTodo('TODO');
        expect(action).toEqual({type: types.ADD_TODO, todo: 'TODO'});
    })
})
