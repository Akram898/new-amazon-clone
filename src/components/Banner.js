import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative t-10">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="img" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="img" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="img" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
