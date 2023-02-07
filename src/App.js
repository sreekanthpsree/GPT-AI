import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Features,
  WhatTheGroup,
  Header,
  Possibilitty,
} from "./containers/index";
import { Brand, Cta, Navbar } from "./components/index";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatTheGroup />
      <Features />
      <Possibilitty />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
