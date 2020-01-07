import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Heroes from "./heroes/pages/Heroes";
import EditHero from "./heroes/pages/EditHero";

const Router = () => (
    <Switch>
        <Route path={"/heroes"} component={Heroes} />
        <Route path={"/edit-hero/:id"} component={EditHero} />
        
        <Redirect from={"/"} exact to={"/heroes"} />
    </Switch>
);

export default Router;
