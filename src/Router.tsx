import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Heroes from './features/heroes/pages/Heroes';
import Villains from './features/villains/pages/Villains';
import AntiHeroes from './features/anti-heroes/pages/AntiHeroes';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={Heroes} />
    <Route path={'/saga'} component={Heroes} />
    <Route path={'/thunk'} component={Villains} />
    <Route path={'/toolkit'} component={AntiHeroes} />

    <Redirect exact from={'*'} to={'/saga'} />
  </Switch>
);

export default Router;
