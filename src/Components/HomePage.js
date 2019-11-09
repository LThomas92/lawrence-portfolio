import React from "react";
import MainBody from "./MainBody";
import Services from "./Services";

const HomePage = () => {
  document.title = "Home | Lawrence Thomas ";
  return (
    <div>
      <MainBody />
      <Services />
    </div>
  );
};

export default HomePage;
