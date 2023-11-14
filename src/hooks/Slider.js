import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../data/data";

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default Slider;
