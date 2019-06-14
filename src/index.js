import React from "react";
import ReactDOM from "react-dom";
import Date from "./date.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Date />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
