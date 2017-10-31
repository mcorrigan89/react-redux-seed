import * as React from 'react';
import { css } from 'glamor';

import { themeColor } from '../Todo';
import { ITodo } from '../interfaces';

const todoItemRule = (color) => css({
  border: `1px solid ${color}`,
  padding: '8px',
})

const todoRule = (color) => css({
  color: color
})

export const TodoItem = ({ id, text, completed }: ITodo) => (
  <div {...todoItemRule(themeColor)}>
    <span {...todoRule(themeColor)}>{text}</span>
    <span>{completed}</span>
  </div>
);
