import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/reducers';
import { initialState } from './anti-hero.slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.antiHero || initialState;

/*
The classic way of using Selectors is better than this.
This is too much. I don't recommend this. Just use useSelector
*/

export const selectAntiHeroList = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.antiHeroes,
);

export const selectLoading = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState.loading,
);
