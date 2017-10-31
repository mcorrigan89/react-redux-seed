import * as React from 'react';

import { ITodo } from '../interfaces';

export const TodoItem = ({ id, text, completed }: ITodo) => (
  <div>
    {text}
    <span>{completed}</span>
  </div>
);
