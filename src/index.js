import React from "react";
import ReactDOM from "react-dom";
import Counter from "../src/components/Counter";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
