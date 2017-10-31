import * as React from "react";
import { css } from "glamor";
import { reduce } from 'lodash';
import { uuidv4 } from '../../../utils/guid';

import { COLORS } from "../../../styles/variables";
import { ITodo } from "./interfaces";
import { TodoItem } from "./components/TodoItem";
import { AddTodoItem } from "./components/AddTodoItem";

const getColorHash = (seed) => {
  let hash = reduce(seed, 
      (hash, ch) => ch.charCodeAt(0) + (hash << 6) + (hash << 16) - hash, 0);
  
  hash = Math.abs(hash);
  const hue = hash % 360,
      saturation = hash % 25 + 70,
      lightness = 100 - (hash % 15 + 35);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;

}

const themeColor = getColorHash(uuidv4())

const todoRules = css({
  padding: '120px',
  height: "100%",
  backgroundColor: COLORS.BACKGROUND,
  display: "flex",
  justifyContent: "center"
});

const todoWrapper = css({
  width: '400px',
  height: 'fit-content',
  padding: '40px',
  border: `1px solid ${themeColor}`
});

interface Props {
  todos: Array<ITodo>;
  addTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
}

export class Todo extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  displayTodos() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      );
    });
  }

  render() {
    return (
      <div id="todo" {...todoRules}>
        <div {...todoWrapper}>
          <div>TODOS!!</div>
          {this.displayTodos()}
          <AddTodoItem addTodo={this.props.addTodo} color={themeColor} />
        </div>
      </div>
    );
  }
}
