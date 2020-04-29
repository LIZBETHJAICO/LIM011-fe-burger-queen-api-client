import React from 'react';
import LoginForm from './components/Login/LoginForm';
import Home from './components/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route  exact  path="/" component={LoginForm} />
        <Route path="/Home" component={Home} />
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;