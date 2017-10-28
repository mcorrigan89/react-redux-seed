import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { css } from 'glamor';

// Routes

import { Todo } from './routes/todo';

/**
 * This will be the main entry point into the app and should:
 *  1. Have NO business logic asides from authentication
 *  2. Serve as a top level router
 */

const containerRule = css({
  fontFamily: 'sans-serif',
  width: '100%',
  justifyContent: 'center'
});

export const App = () => {
  return (
    <div {...containerRule}>
      <Switch>
        <Route path="/" exact={true} component={<div>Hello World</div>} />
        <Route path="/todo" component={Todo} />
        <Route path="/about" component={<div>About</div>} />
      </Switch>
    </div>
  );
};
