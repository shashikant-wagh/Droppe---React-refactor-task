import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { fetchProducts } from "./store/store.actions";
import { Provider } from "react-redux";
import ShopApp from "./pages/shop";

store.dispatch(fetchProducts);

Modal.setAppElement("#root");

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ShopApp />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
