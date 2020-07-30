import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./App.css";
import Gallery from "./Gallery.js";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Gallery />
    </div>
  );
}

export default App;
