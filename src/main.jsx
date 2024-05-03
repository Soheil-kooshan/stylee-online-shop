import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/normalize.css";
import "./style/style.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist";
import { persistor } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
