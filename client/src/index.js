import React from "react";
import ReactDOM from "react-dom";
//2 React Router------------
import { BrowserRouter as Router } from "react-router-dom";
//--------------------------
import "./styles.css";
import App from "./App";
//3 Context Provider from Context.js------
import { ContextProvider } from "./Context";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
