import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import ContextProvider from '@/context';
import MainRoute from '@/routes/MainRoute';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/home" render={() => <Redirect to="/" />} />
          <MainRoute />
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
