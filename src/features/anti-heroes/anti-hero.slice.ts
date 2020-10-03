import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAntiHeroesAction } from './anti-hero.actions';
import { AntiHeroStateType } from './anti-hero.types';

const initialState: AntiHeroStateType = {
  antiHero: {
    firstName: '',
    house: '',
    id: '',
    knownAs: '',
    lastName: '',
  },
  antiHeroes: [],
  error: '',
  loading: false,
};

export const antiHeroesSlice = createSlice({
  // name is your (feature, module, namespace, context). The terminologies here can be interchangeable.
  name: 'anti-heroes',
  // initialState is the default value
  initialState,
  // mutate using non-asynchronous actions
  reducers: {
    removeTemporarily: (state, action: PayloadAction<string>) => {
      state.antiHeroes = state.antiHeroes.filter(
        ah => ah.id !== action.payload,
      );
    },
  },
  // mutate using asynchronous actions
  extraReducers: builder => {
    builder.addCase(getAntiHeroesAction.fulfilled, (state, action) => {
      state.antiHeroes = action.payload;
    });
  },
});
/* SELECTORS */
export const selectAntiHeroesCount = (state: {
  antiHero: AntiHeroStateType;
}): number => state.antiHero.antiHeroes.length;
export const selectAntiHeroesList = (state: { antiHero: AntiHeroStateType }) =>
  state.antiHero.antiHeroes;

export const { removeTemporarily } = antiHeroesSlice.actions;

export default antiHeroesSlice.reducer;
