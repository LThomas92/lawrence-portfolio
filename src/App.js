import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Projects from "./Components/Projects";
import HTMLEmails from "./Components/HTMLEmails";
import AboutMe from "./Components/AboutMe";
import HomePage from "./Components/HomePage";

import ReactGA from "react-ga";
import auth from "./auth.ts"; // Sample authentication provider
const history = createBrowserHistory();

const trackingId = "UA-151882388-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId()
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});

import "./App.scss";

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/email-projects" exact component={HTMLEmails} />
      <Route path="/about" exact component={AboutMe} />
      <Route path="/gallery" exact component={Gallery} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
