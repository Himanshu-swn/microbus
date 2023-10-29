import React from "react";
import "../styles/carousel.scss";
import ActionAreaCard from "./sliderCard";

const Carousel = ({ images }) => {
  return (
    <div className="main1">
      <div className="main-slide1">
        {images.map((image, index) => (
          <ActionAreaCard
            key={index}
            image={image}
            name={`Person ${index + 1}`}
            desc={`Description ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
