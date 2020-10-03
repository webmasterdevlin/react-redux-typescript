import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAxios } from '../../axios-http-client/generic-api-calls';
import { EndPoints } from '../../axios-http-client/api-config';
import { AntiHeroModel } from './anti-hero.types';

export const getAntiHeroesAction = createAsyncThunk(
  'antiHeroes/getAntiHeroesAction',
  async () => {
    const { data } = await getAxios<AntiHeroModel[]>(EndPoints.antiHeroes);
    return data;
  },
);
