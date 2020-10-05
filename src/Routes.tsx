import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Heroes from './features/heroes/pages/Heroes';
import Villains from './features/villains/pages/Villains';
import AntiHeroes from './features/anti-heroes/pages/AntiHeroes';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<h2>Loading</h2>}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

// const Routes = () => (
//   <Switch>
//     <Route exact path={'/'} component={Heroes} />
//     <Route path={'/saga'} component={Heroes} />
//     <Route path={'/thunk'} component={Villains} />
//     <Route path={'/toolkit'} component={AntiHeroes} />
//
//     <Redirect exact from={'*'} to={'/saga'} />
//   </Switch>
// );
//
// export default Routes;

const routes: Routes = [
  {
    exact: true,
    path: '/',
    component: lazy(
      () => import('../src/features/anti-heroes/pages/AntiHeroes'),
    ),
  },
  {
    exact: true,
    path: '/toolkit',
    component: lazy(
      () => import('../src/features/anti-heroes/pages/AntiHeroes'),
    ),
  },
  {
    exact: true,
    path: '/thunk',
    component: lazy(() => import('../src/features/villains/pages/Villains')),
  },
  {
    exact: true,
    path: '/saga',
    component: lazy(() => import('../src/features/heroes/pages/Heroes')),
  },
  {
    component: () => <Redirect to={'/toolkit'} />,
  },
];

export default routes;
