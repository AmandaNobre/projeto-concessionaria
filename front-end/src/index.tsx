import React from "react";
import ReactDOM from "react-dom/client";

import { ToastContainer } from "react-toastify";

import "./styles.scss";
import "./variables.scss";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>
);
