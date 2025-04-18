import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from "./App";
import store from "./redux/app/store";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
