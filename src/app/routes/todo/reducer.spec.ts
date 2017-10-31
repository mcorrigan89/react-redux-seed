import { ITodo } from "./interfaces";
import { todoReducer } from './reducer';
import { types } from './actions';

const fakeTodo: ITodo = {
  id: "one",
  text: "blahblah",
  completed: false
};

const fakeTodo2: ITodo = {
  id: "two",
  text: "blahblah2",
  completed: false
};

describe("todoReducer", () => {
  test("initialState", () => {
    let state;
    state = todoReducer(undefined, { type: types.ADD_TODO, todo: fakeTodo });
    expect(state).toEqual({ todos: [fakeTodo] });
  });

  test("FAKE_ACTION", () => {
    let state;
    state = todoReducer({ todos: [] }, { type: null, todo: null });
    expect(state).toEqual({ todos: [] });
  });

  test("ADD_TODO", () => {
    let state;
    state = todoReducer({ todos: [] },
      { type: types.ADD_TODO, todo: fakeTodo });
    expect(state).toEqual({ todos: [fakeTodo] });
  });

  test("ADD_TODO (second TODO)", () => {
    let state;
    state = todoReducer(
      { todos: [fakeTodo] },
      { type: types.ADD_TODO, todo: fakeTodo2 }
    );
    expect(state).toEqual({ todos: [fakeTodo, fakeTodo2] });
  });

  test("UPDATE_TODO", () => {
    let state;
    state = todoReducer(
      { todos: [fakeTodo, fakeTodo2] },
      {
        type: types.UPDATE_TODO,
        todo: {
          id: "one",
          text: "flerp derp",
          completed: false
        }
      }
    );
    expect(state).toEqual({
      todos: [
        {
          id: "one",
          text: "flerp derp",
          completed: false
        },
        fakeTodo2
      ]
    });
  });

  test('DELETE_TODO', () => {
    let state;
    state = todoReducer({ todos: [fakeTodo, fakeTodo2]}, {type: types.DELETE_TODO, todo: fakeTodo });
    expect(state).toEqual({ todos: [fakeTodo2] });
  })
});
