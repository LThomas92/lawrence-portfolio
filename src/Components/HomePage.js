import React from "react";
import MainBody from "./MainBody";
import Services from "./Services";
import Header from "./Header";
import Projects from "./Projects";

const HomePage = () => {
  document.title = "Home | Lawrence Thomas ";
  return (
    <div>
      <Header />
      <MainBody />
      <Services />
      <Projects />
    </div>
  );
};

export default HomePage;
