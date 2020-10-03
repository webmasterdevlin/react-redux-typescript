import { Dispatch, ActionCreator } from 'redux';
import { VillainModel, VillainActionTypes } from './villain-types';
import {
  deleteAxios,
  getAxios,
  postAxios,
  putAxios,
} from '../../axios-http-client/generic-api-calls';
import { EndPoints } from '../../axios-http-client/api-config';

/* action creators */
export const fetchVillains: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: VillainActionTypes.FETCH_VILLAINS_REQUEST });

    try {
      const { data } = await getAxios<VillainModel>(EndPoints.villains);
      dispatch({
        type: VillainActionTypes.FETCH_VILLAINS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.FETCH_VILLAINS_FAIL,
        payload: e.message,
      });
    }
  };
};

export const removeVillain: ActionCreator<any> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.REMOVE_VILLAIN_REQUEST,
    });

    try {
      await deleteAxios<void>(EndPoints.villains, id);
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_SUCCESS,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_FAIL,
        payload: e.message,
      });
    }
  };
};

export const addVillain: ActionCreator<any> = (villain: VillainModel) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.ADD_VILLAIN_REQUEST,
    });

    try {
      const { data } = await postAxios<VillainModel>(
        EndPoints.villains,
        villain,
      );
      dispatch({ type: VillainActionTypes.ADD_VILLAIN_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.ADD_VILLAIN_FAIL,
        payload: e.message,
      });
    }
  };
};

export const updateVillain: ActionCreator<any> = (
  id: string,
  villain: VillainModel,
) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.UPDATE_VILLAIN_REQUEST,
    });

    try {
      await putAxios<void, VillainModel>(EndPoints.villains, id, villain);
      dispatch({
        type: VillainActionTypes.UPDATE_VILLAIN_SUCCESS,
        payload: villain,
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.UPDATE_VILLAIN_FAIL,
        payload: e.message,
      });
    }
  };
};
