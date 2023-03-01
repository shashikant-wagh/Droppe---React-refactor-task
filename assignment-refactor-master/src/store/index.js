import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import shopReducer from "./shop.reducer";

export default createStore(shopReducer, applyMiddleware(thunk));
