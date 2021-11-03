import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Calculator from './views/Calculator';

function App() {
  return (
    <Switch>
      <Route exact path="/calculadora" component={Calculator} />
      <Route exact path="*" render={() => <Redirect to="/calculadora" />} />
    </Switch>
  );
}

export default App;
