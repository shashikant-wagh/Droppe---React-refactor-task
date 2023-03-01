import "../mock/apiManager.mock";
import React from "react";
import store from "../store";
import { render } from "../test.utils";
import { Product } from "../components/product";
import { fetchProducts } from "../store/store.actions";
import { act, screen, fireEvent } from "@testing-library/react";

async function setup() {
  await act(() => store.dispatch(fetchProducts));
  const product = store.getState().products[0];
  render(<Product product={product} index={0} />);
}

const getEleByText = (str) => screen.getByText(new RegExp(str, "i"));

beforeEach(async () => await setup());

it("render a product details", async () => {
  const product = store.getState().products[0];

  expect(getEleByText(product.title)).toBeInTheDocument();
  expect(getEleByText(product.price)).toBeInTheDocument();
  expect(getEleByText(product.description)).toBeInTheDocument();
  expect(
    getEleByText(product.rating ? `${product.rating.rate}/5` : "")
  ).toBeInTheDocument();
});

it("it make a product to favorite/ unfavorite on button click", async () => {
  const button = screen.getByTestId("favButton");
  await fireEvent.click(button);
  expect(store.getState().products[0].isFavorite).toBe(true); //favorite
  await fireEvent.click(button);
  expect(store.getState().products[0].isFavorite).toBe(false); // unfavorite
});
