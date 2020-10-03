import { IVillainState, VillainActionTypes } from './villain-types';

const initialState: IVillainState = {
  villains: [
    {
      id: '',
      firstName: '',
      lastName: '',
      house: '',
      knownAs: '',
    },
  ],
  villain: {
    id: '',
    firstName: '',
    lastName: '',
    house: '',
    knownAs: '',
  },
  isLoading: false,
  error: '',
};

interface IAction {
  type: string;
  payload: any;
}

export const villainReducer = (
  state: IVillainState = initialState,
  action: IAction,
): IVillainState => {
  switch (action.type) {
    case VillainActionTypes.FETCH_VILLAINS_REQUEST:
      return { ...state, isLoading: true };
    case VillainActionTypes.FETCH_VILLAINS_SUCCESS:
      return { ...state, isLoading: false, villains: action.payload };
    case VillainActionTypes.FETCH_VILLAINS_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case VillainActionTypes.REMOVE_VILLAIN_REQUEST:
      return { ...state, isLoading: true };
    case VillainActionTypes.REMOVE_VILLAIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        villains: state.villains.filter(
          villain => villain.id !== action.payload,
        ),
      };
    case VillainActionTypes.REMOVE_VILLAIN_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case VillainActionTypes.ADD_VILLAIN_REQUEST:
      return { ...state, isLoading: true };
    case VillainActionTypes.ADD_VILLAIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        villains: [...state.villains, action.payload],
      };
    case VillainActionTypes.ADD_VILLAIN_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case VillainActionTypes.UPDATE_VILLAIN_REQUEST:
      return { ...state, isLoading: true };
    case VillainActionTypes.UPDATE_VILLAIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        villains: state.villains.map(villain =>
          villain.id === action.payload.id ? action.payload : villain,
        ),
      };
    case VillainActionTypes.UPDATE_VILLAIN_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
