import "../mock/apiManager.mock";
import React from "react";
import store from "../store";
import ShopApp from "../pages/shop";
import { act } from "@testing-library/react";
import { fetchProducts } from "../store/store.actions";
import { render } from "../test.utils";
import { mockGetResponse } from "../mock/apiManager.mock";

async function setup() {
  render(<ShopApp {...{}} />);
  await act(() => store.dispatch(fetchProducts));
  return store.getState().products;
}

beforeEach(async () => await setup());

it("fetch products", async () => {
  const products = store.getState().products;
  expect(products).toMatchObject(mockGetResponse);
});
