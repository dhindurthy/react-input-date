import React from "react";
import ReactDOM from "react-dom";
import Datedemo from "./datedemo.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Datedemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
