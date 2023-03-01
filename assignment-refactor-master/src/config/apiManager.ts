import { ProductInterface } from "../store/store.types";

const ENDPOINT = "https://fakestoreapi.com/products";

export const getRequest = async () => {
  const jsonResponse = await fetch(ENDPOINT);
  const response = await jsonResponse.json();
  return response;
};

export const postRequest = async (payload: ProductInterface) => {
  const jsonResponse = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      isFavorite: false,
      title: payload.title,
      price: payload.price,
      description: payload.description,
    }),
  });

  const response = await jsonResponse.json();
  return response;
};
