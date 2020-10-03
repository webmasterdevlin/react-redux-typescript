/* action creators of Saga */
import { HeroModel, HeroActionTypes } from './hero-types';
import { Action } from 'redux';

type ActionType = {
  readonly payload?: any;
} & Action;

export const fetchHeroes = (): ActionType => ({
  type: HeroActionTypes.FETCH_HEROES_REQUEST,
});

export const removeHero = (id: string): ActionType => ({
  type: HeroActionTypes.REMOVE_HERO_REQUEST,
  payload: id,
});

export const addHero = (hero: HeroModel): ActionType => ({
  type: HeroActionTypes.ADD_HERO_REQUEST,
  payload: hero,
});

export const updateHero = (hero: HeroModel) => ({
  type: HeroActionTypes.UPDATE_HERO_REQUEST,
  payload: hero,
});
