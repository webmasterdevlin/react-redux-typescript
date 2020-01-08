import {
  getVillains,
  deleteVillain,
  postVillain,
  putVillain
} from "./villain-service";
import { Dispatch, ActionCreator } from "redux";
import { IVillainModel, VillainActionTypes } from "./villain-types";

/* action creators */
export const fetchVillains: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: VillainActionTypes.FETCH_VILLAINS_REQUEST });

    try {
      const { data } = await getVillains();
      dispatch({ type: VillainActionTypes.FETCH_VILLAINS_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.FETCH_VILLAINS_FAIL,
        payload: e.message
      });
    }
  };
};

export const removeVillain: ActionCreator<any> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.REMOVE_VILLAIN_REQUEST
    });

    try {
      await deleteVillain(id);
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_SUCCESS,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_FAIL,
        payload: e.message
      });
    }
  };
};

export const addVillain: ActionCreator<any> = (villain: IVillainModel) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.ADD_VILLAIN_REQUEST
    });

    try {
      const { data } = await postVillain(villain);
      dispatch({ type: VillainActionTypes.ADD_VILLAIN_SUCCESS });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.ADD_VILLAIN_FAIL,
        payload: e.message
      });
    }
  };
};

export const updateVillain: ActionCreator<any> = (villain: IVillainModel) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.UPDATE_VILLAIN_REQUEST
    });

    try {
      await putVillain(villain);
      dispatch({
        type: VillainActionTypes.UPDATE_VILLAIN_SUCCESS,
        payload: villain
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.UPDATE_VILLAIN_FAIL,
        payload: e.message
      });
    }
  };
};
