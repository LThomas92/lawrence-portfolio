import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Gallery from "./Components/Gallery";
import BlogList from "./Components/BlogList";
import ShowPage from "./Components/ShowPage";
import NewPost from "./Components/BlogForms/NewPost";

import AboutMe from "./Components/AboutMe";
import HomePage from "./Components/HomePage";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutMe} />
      <Route path="/blog" exact component={BlogList} />
      <Route path="/blog/show/:id" exact component={ShowPage} />
      <Route path="/add" exact component={NewPost} />
      <Route path="/gallery" exact component={Gallery} />
    </BrowserRouter>
  );
};

export default App;
