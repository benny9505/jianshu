import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./static/iconFont/iconfont";
import App from "./App";
import { Globalstyle } from "./style.js";
import { Iconfont } from "./static/iconFont/iconfont";
ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <Iconfont />
    <App />
  </Fragment>,
  document.getElementById("root")
);
