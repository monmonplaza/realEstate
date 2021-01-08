import React from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData.js";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
