import React from 'react';
import LoginForm from './components/LoginForm';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={LoginForm} />
      
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;