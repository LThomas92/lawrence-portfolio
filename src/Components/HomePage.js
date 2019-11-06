import React from "react";
import MainBody from "./MainBody";
import Services from "./Services";

const HomePage = () => {
  document.title = "Lawrence Thomas | Home";
  return (
    <div>
      <MainBody />
      <Services />
    </div>
  );
};

export default HomePage;