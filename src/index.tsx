import React from "react";
import { render } from "react-dom";
import App from "./App";

const rootContent = document.getElementById("root");

render(<App />, rootContent);

if (module.hot) {
  module.hot.accept();
}
