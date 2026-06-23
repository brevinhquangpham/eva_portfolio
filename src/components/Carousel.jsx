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

    const isYouTube = (src) => {
        return typeof src === 'object' && src.youtubeEmbedId;
    };

    const renderMedia = () => {
        const currentItem = images[currentIndex];

        if (isYouTube(currentItem)) {
            return (
                <div className="relative w-full h-full overflow-hidden">
                    <iframe
                        className="w-full h-full object-contain transition-opacity duration-500"
                        width="100%"
                        height="calc(100% + 60px)"
                        src={`https://www.youtube.com/embed/${currentItem.youtubeEmbedId}?autoplay=1&mute=1&loop=1&playlist=${currentItem.youtubeEmbedId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        } else if (isVideo(currentItem)) {
            return (
                <video
                    src={currentItem}
                    className="w-full h-full object-contain transition-opacity duration-500"
                    controls
                    autoPlay
                    loop
                    muted
                />
            );
        } else {
            return (
                <img
                    src={currentItem}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-contain transition-opacity duration-500"
                />
            );
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex items-center gap-2 md:gap-6">

                <button
                    onClick={goToPrevious}
                    className="flex-shrink-0 bg-white hover:bg-gray-100 text-body_text p-1 md:p-3 rounded-full transition-all duration-300"
                    aria-label="Previous image"
                >
                    <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="relative w-full aspect-[18/10] overflow-hidden rounded-2xl bg-gray-400">
                    {renderMedia()}

                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                <button
                    onClick={goToNext}
                    className="flex-shrink-0 bg-white hover:bg-gray-100 text-body_text p-1 md:p-3 rounded-full transition-all duration-300"
                    aria-label="Next image"
                >
                    <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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