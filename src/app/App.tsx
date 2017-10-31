import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { css } from 'glamor';

import { COLORS } from '../styles/variables';

// Routes
import { HelloWorld } from './routes/helloworld/Hello';
import { TodoContainer } from './routes/todo';

/**
 * This will be the main entry point into the app and should:
 *  1. Have NO business logic asides from authentication
 *  2. Serve as a top level router
 */

const containerRule = css({
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100%',
  justifyContent: 'center'
});

export const App = () => {
  return (
    <div {...containerRule}>
      <Switch>
        <Route path="/" exact={true} component={HelloWorld} />
        <Route path="/todo" component={TodoContainer} />
        <Route path="/about" component={TodoContainer} />
      </Switch>
    </div>
  );
};
