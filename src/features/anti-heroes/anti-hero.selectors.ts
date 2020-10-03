import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/reducers';
import { initialState } from './anti-hero.slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.antiHero || initialState;

/*
    For Computing Derived Data
*/

export const selectAThing = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.entities,
);

export const selectSomething = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.ids.length,
);
