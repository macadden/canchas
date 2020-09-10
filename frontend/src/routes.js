import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import DetalleCancha from './DetalleCancha';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cancha/:id" exact component={DetalleCancha} />
    </Switch>
)

export default Routes;