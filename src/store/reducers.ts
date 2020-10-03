/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import { heroReducer } from '../features/heroes/hero-reducer';
import { villainReducer } from '../features/villains/villain-reducer';

/* Previous Redux way */
import { HeroStateType } from '../features/heroes/hero-types';
import { VillainStateType } from '../features/villains/villain-types';

/* New Redux way, the Redux Toolkit way */
import antiHeroesReducer from '../features/anti-heroes/anti-hero.slice';

/* For classic Redux */
export type ApplicationStateType = {
  hero: HeroStateType;
  villain: VillainStateType;
  antiHero: HeroStateType;
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

/*place all reducers here separated by commas. For example, heroReducer*/
const injectedReducers = {
  hero: heroReducer,
  villain: villainReducer,

  antiHero: antiHeroesReducer, // Redux Toolkit way
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
