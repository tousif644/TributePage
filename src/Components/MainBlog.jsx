import React from "react";
import tributeImage from "../Images/image.jpg";

function MainBlog() {
  return (
    <>
      <div className="main-blog-intro-text">
        <h1>Dr. Norman Borlaug</h1>
        <p>The man who saved a billion lives</p>
      </div>
      <div className="main-blog-image">
        <img src={tributeImage} alt="" />
        <p>
          Dr. Norman Borlaug, third from the left, trains biologists in Mexico
          on how to increase wheat yields - part of his life-long war on hunger.
        </p>
        <br />
      </div>
      <h2>Here's a time line of Dr. Borlaug's life:</h2>
    </>
  );
}

export default MainBlog;
