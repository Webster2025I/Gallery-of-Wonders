import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

<<<<<<< HEAD
  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-500">No Image Available</div>;
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-500" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
=======
  // If there are no images or only one, don't render the carousel controls
  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>;
  }

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      </div>
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190

      {/* Left Arrow */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
<<<<<<< HEAD
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
=======
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 focus:outline-none"
        >
          &#10094;
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        </button>
      )}

      {/* Right Arrow */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
<<<<<<< HEAD
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
=======
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 focus:outline-none"
        >
          &#10095;
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
<<<<<<< HEAD
                currentIndex === slideIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
=======
                currentIndex === slideIndex ? 'bg-white' : 'bg-gray-400'
              }`}
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;