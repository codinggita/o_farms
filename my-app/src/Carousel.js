import { useState, useEffect } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  // Function to handle going to a specific slide
  const handleGoToSlide = (index) => {
    setGoToSlide(index);
  };

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={props.cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      {/* Render buttons or controls to navigate to specific slides */}
      <div>
        {props.cards.map((_, index) => (
          <button key={index} onClick={() => handleGoToSlide(index)}>
            Go to Slide {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
