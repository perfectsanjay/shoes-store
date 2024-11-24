import React, { useEffect, useState } from "react";
import './Carousel.style.scss'
const imageData = [
  {
    id: 1,
    url: "src/assets/shoes-images/bhautik-patel-ui8yd5Qxv-Y-unsplash.jpg",
    alt: "image1",
  },
  {
    id: 2,
    url: "src/assets/shoes-images/domino-studio-164_6wVEHfI-unsplash.jpg",
    alt: "image2",
  },
  {
    id: 3,
    url: "src/assets/shoes-images/felipepelaquim-6zO5VKogoZE-unsplash.jpg",
    alt: "image3",
  },
  {
    id: 4,
    url: "src/assets/shoes-images/maksim-larin-ezdrvzA1hZw-unsplash.jpg",
    alt: "image4",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };
  const prevPicture = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const intervel = setInterval(nextPicture, 3000);
      return () => clearInterval(intervel);
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
        {imageData.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <img src={image.url} alt={image.alt} className="carousel-image" />
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
