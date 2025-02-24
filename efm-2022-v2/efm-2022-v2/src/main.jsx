import React from "react";
import ReactDOM from "react-dom/client" ;
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store.js";
import Principal from "./principal.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Principal/>    
    </BrowserRouter>
  </Provider>
)