import React from "react";
import "./App.css";

import Banner from "./components/banner/banner.component.jsx";
import Row from "./components/row/row.component.jsx";

import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row getUrl={requests.getTrending} title="Trending" />
      <Row getUrl={requests.getDescendingPopularity} title="Popular" />
      <Row getUrl={requests.getFantasy} title="Fantasy" />
      <Row getUrl={requests.getDocumentary} title="Documentary" />
      <Row getUrl={requests.getFamily} title="Family" />
    </div>
  );
}

export default App;
