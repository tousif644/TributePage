import React from "react";
import Footer from "./Footer";
import BlockQuote from "./BlockQuote";
import MainBlog from "./MainBlog";
import ListItems from "./ListItems";
function Hero() {
  return (
    <div className="main-blog">
      <MainBlog />
      <ListItems />
      <BlockQuote />
      <Footer />
    </div>
  );
}

export default Hero;
