export interface ProductInterface {
  id?: number;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  rating?: { rate: number; count: number };
}

export interface RootState {
  message: string;
  numFavorites: number;
  products: Array<ProductInterface>;
}

export const ActionTypes = {
  ADD_PRODUCT: "ADD_PRODUCT",
  SET_MESSAGE: "SET_MESSAGE",
  MARK_FAVORITE: "MARK_FAVORITE",
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
};
