/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import { InjectedReducersType } from './types/injector-typings';
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
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(
  /*place all reducers here separated by commas. For example, heroReducer*/
  injectedReducers: InjectedReducersType = {
    hero: heroReducer as any,
    villain: villainReducer as any,
    antiHero: antiHeroesReducer,
  },
) {
  return combineReducers({
    ...injectedReducers,
  });
}
