import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
// import remixon from "remixicon";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
