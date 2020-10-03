/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import { InjectedReducersType } from './types/injector-typings';
import { heroReducer } from '../features/heroes/hero-reducer';
import { villainReducer } from '../features/villains/villain-reducer';
import { antiHeroesSlice } from '../features/anti-heroes/anti-hero.slice';
import { HeroStateType } from '../features/heroes/hero-types';
import { VillainStateType } from '../features/villains/villain-types';

export interface IApplicationState {
  heroReducer: HeroStateType;
  villainReducer: VillainStateType;
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(
  /*place all reducers here separated by commas. For example, heroReducer*/
  injectedReducers: InjectedReducersType = {
    heroReducer: heroReducer,
    villainReducer: villainReducer,
    antiHero: antiHeroesSlice.reducer,
  },
) {
  return combineReducers({
    ...injectedReducers,
  });
}
