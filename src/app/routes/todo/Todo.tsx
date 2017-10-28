import * as React from 'react';

export class Todo extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div id="todo">TODO Component</div>;
  }
}
