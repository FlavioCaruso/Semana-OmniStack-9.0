import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Info from './pages/Info';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>  
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
        <Route path="/info/:id" component={Info} />
      </Switch>
    </BrowserRouter>
  ) 
}