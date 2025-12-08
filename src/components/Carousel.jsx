import React, { useState } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const isVideo = (src) => {
        const videoExtensions = ['.mov', '.mp4', '.webm', '.ogg'];
        return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex items-center gap-6">
                
                <button
                    onClick={goToPrevious}
                    className="flex-shrink-0 bg-white hover:bg-gray-100 text-body_text p-3 rounded-full transition-all duration-300"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

    
                <div className="relative w-full aspect-[18/10] overflow-hidden rounded-2xl bg-gray-400">
                    {isVideo(images[currentIndex]) ? (
                        <video
                            src={images[currentIndex]}
                            className="w-full h-full object-contain transition-opacity duration-500"
                            controls
                            autoPlay
                            loop
                            muted
                        />
                    ) : (
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-full object-contain transition-opacity duration-500"
                        />
                    )}

                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                <button
                    onClick={goToNext}
                    className="flex-shrink-0 bg-white hover:bg-gray-100 text-body_text p-3 rounded-full transition-all duration-300"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentIndex
                                ? 'w-8 h-3 bg-gray-400'
                                : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;