import { createAsyncThunk } from '@reduxjs/toolkit';
import { EndPoints } from '../../axios-http-client/api-config';
import { AntiHeroActionTypes, AntiHeroModel } from './anti-hero.types';
import {
  deleteAxios,
  getAxios,
  postAxios,
} from '../../axios-http-client/generic-api-calls';

export const getAntiHeroesAction = createAsyncThunk(
  AntiHeroActionTypes.FETCH_ANTI_HEROES,
  async () => {
    return (await getAxios<AntiHeroModel>(EndPoints.antiHeroes)).data;
  },
);

export const postAntiHeroAction = createAsyncThunk(
  AntiHeroActionTypes.ADD_ANTI_HERO,
  async (antiHero: AntiHeroModel) => {
    return (await postAxios<AntiHeroModel>(EndPoints.antiHeroes, antiHero))
      .data;
  },
);

export const deleteAntiHeroAction = createAsyncThunk(
  AntiHeroActionTypes.REMOVE_ANTI_HERO,
  async (id: string) => {
    return await deleteAxios<void>(EndPoints.antiHeroes, id);
  },
);
