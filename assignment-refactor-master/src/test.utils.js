import React, { PropsWithChildren } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

function ReduxProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

const reduxRender = (ui, options = []) =>
  render(ui, { wrapper: ReduxProvider }, ...options);

export * from "@testing-library/react";
export { reduxRender as render };

// export function renderWithProviders(
//   ui: React.ReactElement,
//   { preloadedState = {}, ...renderOptions }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

// // store.dispatch(initializeCurrencyCodes);

// // function ReduxProvider({ children }) {
// //   // eslint-disable-next-line react/react-in-jsx-scope
// //   return <Provider store={store}>{children}</Provider>;
// // }

// // const reduxRender = (ui, options = []) =>
// //   render(ui, { wrapper: ReduxProvider }, ...options);

// export * from "@testing-library/react";
// export { renderWithProviders as render, mockFetchResponse };
