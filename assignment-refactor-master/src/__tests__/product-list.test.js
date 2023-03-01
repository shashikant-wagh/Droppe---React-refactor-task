import "../mock/apiManager.mock";
import React from "react";
import store from "../store";
import { render } from "../test.utils";
import { act, screen } from "@testing-library/react";
import { fetchProducts } from "../store/store.actions";
import ProductList from "../components/product-list-components";

async function setup() {
  await act(() => store.dispatch(fetchProducts));
  const products = store.getState().products;
  render(<ProductList products={products} />);
}

beforeEach(async () => await setup());

it("render a product card", async () => {
  const products = store.getState().products;
  const cards = screen.getAllByTestId("productCard");
  expect(cards.length).toEqual(products.length);
});
