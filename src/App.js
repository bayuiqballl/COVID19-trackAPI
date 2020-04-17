import React from "react";
import Navigation from "./components/Navigation";
import DataInd from "./components/DataInd";
import DataWorld from "./components/DataWorld";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <DataInd />
        <DataWorld />
      </header>
    </div>
  );
}

export default App;
