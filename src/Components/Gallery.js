import React from "react";

const Gallery = () => {
  document.title = "Lawrence Thomas | Gallery";
  return (
    <React.Fragment>
      <div className="header-box">
        <h1 className="gallery-header">Logos & Digital Cartoons</h1>
        <hr className="small-line small-line--xtra" />
      </div>
      <div className="grid">
        <div className="item item--large">
          <div className="item__details">Custom Cartoon head</div>
        </div>
        <div className="item item--medium">
          <div className="item__details">
            "Dragon Ball Super" Fan-Made Cartoon
          </div>
        </div>
        <div className="item item--large">
          <div className="item__details">
            Riley from "The Boondocks" Cartoon
          </div>
        </div>
        <div className="item item--medium">
          <div className="item__details">Your Take Logo</div>
        </div>
        <div className="item item--medium">
          <div className="item__details">N.G.T.C Photography Logo</div>
        </div>
        <div className="item">
          <div className="item__details">Watch Me Grow Fitness Logo</div>
        </div>
        <div className="item item--medium">
          <div className="item__details">Mind of A Millennial Logo</div>
        </div>
        <div className="item item--medium">
          <div className="item__details">Mesmer Eyes Minx Logo</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
