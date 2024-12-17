import React, { useEffect, useState } from "react";
import "./Carousel.style.scss";
import { Link } from "react-router-dom";
import data from "../pages/categoryPage/utils.data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  
  const allItemData = data.flatMap((category) => category.items);

  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allItemData.length);
  };

  const prevPicture = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allItemData.length) % allItemData.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextPicture, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="arrow left-arrow" onClick={prevPicture}>
        ❮
      </button>
      <div className="carousel-container">
        {allItemData.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <Link to={`/shop/product/${image.id}`}>
                <img
                  src={image.imageUrl} 
                  alt={image.name} 
                  className="carousel-image"
                />
              </Link>
            )}
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={nextPicture}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
