import React from "react";

import ReactDOM from "react-dom";

// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj

import "./index.css";

import App from "./App";

import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
