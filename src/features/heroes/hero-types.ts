export interface IHeroState {
  readonly heroes: IHeroModel[]
  readonly hero: IHeroModel
  readonly isLoading: boolean
  readonly error: string
}

export type ApiResponse = Record<string, any>

export interface IHeroModel extends ApiResponse {
  id: string
  firstName: string
  lastName: string
  house: string
  knownAs: string
}

/* action types */
export const HeroActionTypes = {
  FETCH_HEROES_REQUEST: '@@/hero/FETCH_HEROES_REQUEST',
  FETCH_HEROES_SUCCESS: '@@/hero/FETCH_HEROES_SUCCESS',
  FETCH_HEROES_FAIL: '@@/hero/FETCH_HEROES_FAIL',

  REMOVE_HERO_REQUEST: '@@/hero/REMOVE_HERO_REQUEST',
  REMOVE_HERO_SUCCESS: '@@/hero/REMOVE_HERO_SUCCESS',
  REMOVE_HERO_FAIL: '@@/hero/REMOVE_HERO_FAIL',

  ADD_HERO_REQUEST: '@@/hero/ADD_HERO_REQUEST',
  ADD_HERO_SUCCESS: '@@/hero/ADD_HERO_SUCCESS',
  ADD_HERO_FAIL: '@@/hero/ADD_HERO_FAIL',

  UPDATE_HERO_REQUEST: '@@/hero/UPDATE_HERO_REQUEST',
  UPDATE_HERO_SUCCESS: '@@/hero/UPDATE_HERO_SUCCESS',
  UPDATE_HERO_FAIL: '@@/hero/UPDATE_HERO_FAIL',
}
