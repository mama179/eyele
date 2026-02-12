import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, className = '', autoPlay = true, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, autoPlay, interval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`slider ${className}`}>
      <div 
        className="slides" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="slide" 
            style={{ backgroundImage: `url(${image.url})` }}
          >
            {image.content && (
              <div className="slider-content">
                {image.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
