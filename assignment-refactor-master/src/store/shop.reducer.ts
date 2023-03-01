import { ActionTypes } from "./store.types";

const INITIAL_STATE = {
  products: [],
  message: "",
  numFavorites: 0,
};

interface ActionInterface {
  type: string;
  payload: {};
}

const shopReducer = (state = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case ActionTypes.MARK_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
