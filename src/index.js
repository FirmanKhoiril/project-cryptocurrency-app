import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store.js";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
