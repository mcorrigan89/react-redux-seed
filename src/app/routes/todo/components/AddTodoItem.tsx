import * as React from 'react';
import { css } from 'glamor';
import { ITodo, ITodoPartial } from '../interfaces';
import { COLORS } from '../../../../styles/variables';

const buttonRules = color =>
  css({
    border: `1px solid ${color}`,
    color: `${color}`,
    backgroundColor: `${COLORS.BACKGROUND}`,
    fontWeight: '300'
  });

interface Props {
  color: string;
  addTodo: (todo: ITodoPartial) => void;
}

export class AddTodoItem extends React.Component<Props, { text: string }> {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleOnClick = () => {
    this.props.addTodo({
      text: this.state.text,
      completed: false
    });
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleOnChange} value={this.state.text} />
        <button {...buttonRules(this.props.color)} onClick={this.handleOnClick}>
          Add Todo
        </button>
      </div>
    );
  }
}
