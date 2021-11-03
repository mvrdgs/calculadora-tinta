import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/calculadora" render={() => 'teste'} />
      <Route exact path="*" render={() => <Redirect to="/calculadora" />} />
    </Switch>
  );
}

export default App;
