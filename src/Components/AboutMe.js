import React from "react";
import ProfileImg from "../img/profile_img.JPG";
import MedImg1 from '../img/Medium-Image.jpeg';
import MedImg2 from '../img/med-image-2.jpeg';

const AboutMe = () => {
  document.title = "About Me | Lawrence Thomas ";
  return (
    <section>
      <div className="aboutme-container">
        <div className="aboutme-text">
          My name is Lawrence Thomas as you can see in the above header. I am a
          26 Year Old self taught web developer. I graduated from St. John's
          Univeristy in 2014 with a B.S in Mass Communications. I have been
          coding since 2017 I began making websites with HTML, CSS and
          Javascript. When I'm not coding you can catch me playing or watching
          basketball or possibly drawing digital cartoons. I've always been
          obsessed with technology and learning something new everyday. I plan
          to take my learning of web development and translate that into mobile
          app development.
        </div>

        <div className="aboutme-img">
          <img
            alt="Lawrence Thomas"
            src={ProfileImg}
            className="profile__img"
          />
        </div>
      </div>
      <div className="medium-articles-container">
        <h3>Check out my Medium articles!</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/better-programming/how-to-use-custom-slugs-in-your-url-instead-of-ids-on-your-mern-application-75d4e598081a"
        >
          <img
            className="medium-img"
            alt="Medium Blog"
            src={MedImg1}
          ></img>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/better-programming/image-upload-with-cloudinary-mern-f18812d5d023"
        >
          <img
            className="medium-img"
            alt="Medium Blog"
            src={MedImg2}
          ></img>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
