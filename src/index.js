import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
