import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import HomePage from "./Components/HomePage";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/about" exact component={AboutMe} />
      <Route path="/gallery" exact component={Gallery} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
