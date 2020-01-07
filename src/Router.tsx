import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Heroes from "./heroes/pages/Heroes";
import EditHero from "./heroes/pages/EditHero";
import Villains from "./villains/pages/Villains";

const Router = () => (
    <Switch>
        <Route path={"/heroes"} component={Heroes} />
        <Route path={"/villains"} component={Villains} />
        <Route path={"/edit-hero/:id"} component={EditHero} />

        <Redirect from={"/"} exact to={"/heroes"} />
    </Switch>
);

export default Router;
