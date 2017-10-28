import { todoReducer } from "./reducer";
import { types } from "./actions";

describe("todoReducer", () => {
  test("initialState", () => {
    let state;
    state = todoReducer(undefined, {});
    expect(state).toEqual({ todos: [] });
  });

  test("FAKE_ACTION", () => {
    let state;
    state = todoReducer({ todos: [] }, { type: "FAKE_ACTION", todo: "TODO" });
    expect(state).toEqual({ todos: [] });
  });

  test("ADD_TODO", () => {
    let state;
    state = todoReducer({ todos: [] }, { type: types.ADD_TODO, todo: "TODO" });
    expect(state).toEqual({ todos: ["TODO"] });
  });

  test("ADD_TODO (second TODO)", () => {
    let state;
    state = todoReducer(
      { todos: ["TODO"] },
      { type: types.ADD_TODO, todo: "TODO_TWO" }
    );
    expect(state).toEqual({ todos: ["TODO", "TODO_TWO"] });
  });
});
