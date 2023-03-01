import "../mock/apiManager.mock";
import React from "react";
import store from "../store";
import { render } from "../test.utils";
import CreateProduct from "../components/create-product";
import { act, screen, fireEvent } from "@testing-library/react";
import { fetchProducts, postAction } from "../store/store.actions";

async function setup() {
  await act(() => store.dispatch(fetchProducts));
  render(<CreateProduct />);
}

beforeEach(async () => await setup());

it("creates new product", async () => {
  const payload = {
    title: "title 1",
    describe: "description1",
  };

  await act(() => store.dispatch(postAction(payload)));
  const products = store.getState().products;
  expect(products[0]).toMatchObject(payload);
});
