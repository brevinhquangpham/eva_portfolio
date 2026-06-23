import React from 'react';
import Carousel from './Carousel';

function Project({ imgSrc, videoSrc, youtubeEmbedId, carouselImages, headerText, bodyText, date, videoClassName, titleOnTop, videoScaleWidth = 110, videoScaleHeight = 110 }) {
    return (
        <div>
            {titleOnTop ? (
                <div className="flex flex-col items-center">
                    <h1 className="font-cram font-bold text-4xl mb-6">{headerText}</h1>
                    <div className="flex justify-center items-center">
                        {carouselImages ? (
                            <div className="p-8 w-[700px]">
                                <Carousel images={carouselImages} />
                            </div>
                        ) : youtubeEmbedId ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <iframe
                                        className="w-full h-full object-contain"
                                        style={{ transform: `scaleX(${videoScaleWidth / 100}) scaleY(${videoScaleHeight / 100})` }}
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${youtubeEmbedId}?autoplay=1&mute=1&loop=1&playlist=${youtubeEmbedId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ) : videoSrc ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <video 
                                        src={videoSrc} 
                                        className="object-cover -translate-x-[0%] -translate-y-[5%]"
                                        style={{ width: `${videoScaleWidth}%`, height: `${videoScaleHeight}%` }}
                                        autoPlay 
                                        loop 
                                        muted
                                    />
                                </div>
                            </div>
                        ) : (
                            <img src={imgSrc} alt="img" className="p-8 w-[700px] h-auto" />
                        )}
                    </div>
                    <div className="text-center mt-6 max-w-4xl">
                        <p className="font-raleway font-semibold">{date}</p>
                        <p className="font-raleway">{bodyText}</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center items-center">
                        {carouselImages ? (
                            <div className="p-8 w-[900px]">
                                <Carousel images={carouselImages} />
                            </div>
                        ) : youtubeEmbedId ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <iframe
                                        className="w-full h-full"
                                        style={{ transform: `scaleX(${videoScaleWidth / 100}) scaleY(${videoScaleHeight / 100})` }}
                                        src={`https://www.youtube.com/embed/${youtubeEmbedId}?autoplay=1&mute=1&loop=1&playlist=${youtubeEmbedId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ) : videoSrc ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <video 
                                        src={videoSrc} 
                                        className="object-cover -translate-x-[0%] -translate-y-[5%]"
                                        style={{ width: `${videoScaleWidth}%`, height: `${videoScaleHeight}%` }}
                                        autoPlay 
                                        loop 
                                        muted
                                    />
                                </div>
                            </div>
                        ) : (
                            <img src={imgSrc} alt="img" className="p-8 w-[700px] h-auto" />
                        )}
                    </div>
                    <div className="flex flex-col w-full p-4 gap-2 md:flex-row md:gap-4">
    <div className="flex flex-row items-baseline gap-2 md:flex-col md:w-1/2 md:items-center md:justify-start">
        <h1 className="font-cram font-bold text-3xl">{headerText}</h1>
        <p className="font-raleway font-semibold md:hidden">{date}</p>
    </div>
    <div className="md:w-1/2">
        <p className="font-raleway font-semibold hidden md:block">{date}</p>
        <p className="font-raleway text-center md:text-left">{bodyText}</p>
    </div>
</div>
                </>
            )}
        </div>
    )
}

export default Project;
