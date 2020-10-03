export type VillainStateModel = {
  readonly villains: VillainModel[];
  readonly villain: VillainModel;
  readonly isLoading: boolean;
  readonly error: string;
};

export type ApiResponse = Record<string, any>;

export type VillainModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
} & ApiResponse;

/* action types */
export const VillainActionTypes = {
  FETCH_VILLAINS_REQUEST: '@@/villain/FETCH_VILLAINS_REQUEST',
  FETCH_VILLAINS_SUCCESS: '@@/villain/FETCH_VILLAINS_SUCCESS',
  FETCH_VILLAINS_FAIL: '@@/villain/FETCH_VILLAINS_FAIL',

  REMOVE_VILLAIN_REQUEST: '@@/villain/REMOVE_VILLAIN_REQUEST',
  REMOVE_VILLAIN_SUCCESS: '@@/villain/REMOVE_VILLAIN_SUCCESS',
  REMOVE_VILLAIN_FAIL: '@@/villain/REMOVE_VILLAIN_FAIL',

  ADD_VILLAIN_REQUEST: '@@/villain/ADD_VILLAIN_REQUEST',
  ADD_VILLAIN_SUCCESS: '@@/villain/ADD_VILLAIN_SUCCESS',
  ADD_VILLAIN_FAIL: '@@/villain/ADD_VILLAIN_FAIL',

  UPDATE_VILLAIN_REQUEST: '@@/villain/UPDATE_VILLAIN_REQUEST',
  UPDATE_VILLAIN_SUCCESS: '@@/villain/UPDATE_VILLAIN_SUCCESS',
  UPDATE_VILLAIN_FAIL: '@@/villain/UPDATE_VILLAIN_FAIL',
};
