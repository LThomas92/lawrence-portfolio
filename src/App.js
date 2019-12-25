import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
const HomePage = lazy(() => import("./Components/HomePage"));
const AboutMe = lazy(() => import("./Components/AboutMe"));
const Gallery = lazy(() => import("./Components/Gallery"));
const BlogList = lazy(() => import("./Components/BlogList"));
const ShowPage = lazy(() => import("./Components/ShowPage"));
const NewPost = lazy(() => import("./Components/BlogForms/NewPost"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>....Loading</div>}>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutMe} />
        <Route path="/blog" exact component={BlogList} />
        <Route path="/blog/show/:id" exact component={ShowPage} />
        <Route path="/add" exact component={NewPost} />
        <Route path="/gallery" exact component={Gallery} />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
