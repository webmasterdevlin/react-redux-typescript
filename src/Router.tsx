import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Heroes from './features/heroes/pages/Heroes';
import EditHero from './features/heroes/pages/EditHero';
import Villains from './features/villains/pages/Villains';

const Router = () => (
  <Switch>
    <Route path={'/heroes'} component={Heroes} />
    <Route path={'/villains'} component={Villains} />
    <Route path={'/anti-heroes'} component={Villains} />

    <Route path={'/edit-hero/:id'} component={EditHero} />
    <Route path={'/edit-villain/:id'} component={EditHero} />
    <Route path={'/edit-anti-hero/:id'} component={EditHero} />

    <Redirect from={'/'} exact to={'/heroes'} />
  </Switch>
);

export default Router;
