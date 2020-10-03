import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/reducers';
import { initialState } from './anti-hero.slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.antiHero || initialState;

export const selectAntiHeroList = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.antiHeroes,
);

/*
export const selectLoading = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.loading,
);
*/
