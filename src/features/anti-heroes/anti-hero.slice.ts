import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  deleteAntiHeroAction,
  getAntiHeroesAction,
  postAntiHeroAction,
} from './anti-hero.async.actions';
import {
  AntiHeroModel,
  antiHeroNamespace,
  AntiHeroStateType,
} from './anti-hero.types';

export const usersAdapter = createEntityAdapter();
export const initialState = usersAdapter.getInitialState<AntiHeroStateType>({
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
});
export const antiHeroesSlice = createSlice({
  // name is your (feature, module, namespace, context). The terminologies here can be interchangeable.
  name: antiHeroNamespace,
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
    let previousAntiHeroList: AntiHeroModel[];

    /*GET ALL*/
    builder.addCase(getAntiHeroesAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAntiHeroesAction.fulfilled, (state, action) => {
      state.antiHeroes = action.payload;
      state.loading = false;
    });

    builder.addCase(getAntiHeroesAction.rejected, (state, action: any) => {
      state.error = action.payload.message;
      state.loading = false;
    });

    /*POST*/
    builder.addCase(postAntiHeroAction.fulfilled, (state, action) => {
      state.antiHeroes.push(action.payload);
      state.loading = false;
    });

    /*DELETE*/
    builder.addCase(deleteAntiHeroAction.pending, (state, action: any) => {
      previousAntiHeroList = state.antiHeroes;
      const index = state.antiHeroes.findIndex(action.payload);
      state.antiHeroes.splice(index, 1);
    });

    builder.addCase(deleteAntiHeroAction.rejected, (state, action: any) => {
      state.error = action.error.message;
      alert(action.error.message);
      state.antiHeroes = previousAntiHeroList;
    });
  },
});

export const { removeTemporarily } = antiHeroesSlice.actions;

export default antiHeroesSlice.reducer;
