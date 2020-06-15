import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";

import * as serviceWoker from "./serviceWorker";

ReactDOM.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <PersistGate persistor={persistor}>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </Provider>
  document.getElementById("root")
);

serviceWoker.register();
