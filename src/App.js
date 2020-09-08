import React from "react";
import "./App.css";

import Header from "./components/header/header.component.jsx";
import Row from "./components/row/row.component.jsx";

import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Row getUrl={requests.getTrending} />
    </div>
  );
}

export default App;
