import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Heroes from './features/heroes/pages/Heroes';
import EditHero from './features/heroes/pages/EditHero';
import Villains from './features/villains/pages/Villains';
import EditAntiHero from './features/anti-heroes/pages/EditAntiHero';
import AntiHeroes from './features/anti-heroes/pages/AntiHeroes';
import EditVillain from './features/villains/pages/EditVillain';

const Router = () => (
  <Switch>
    <Route path={'/heroes'} component={Heroes} />
    <Route path={'/villains'} component={Villains} />
    <Route path={'/anti-heroes'} component={AntiHeroes} />

    <Route path={'/edit-hero/:id'} component={EditHero} />
    <Route path={'/edit-villain/:id'} component={EditVillain} />
    <Route path={'/edit-anti-hero/:id'} component={EditAntiHero} />

    <Redirect from={'/'} exact to={'/heroes'} />
  </Switch>
);

export default Router;
