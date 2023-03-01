import { getRequest, postRequest } from "../config/apiManager";
import { ActionTypes, ProductInterface } from "./store.types";

export async function fetchProducts(dispatch: Function) {
  const response = await getRequest();
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response });
}

export function postAction(payload: ProductInterface) {
  return async function postThunk(dispatch: Function) {
    await postRequest(payload);
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: payload });
  };
}
