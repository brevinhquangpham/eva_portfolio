import React from 'react';
import Line from './Line';
import Carousel from './Carousel';

function Project({ imgSrc, videoSrc, carouselImages, headerText, bodyText, date, videoClassName, titleOnTop }) {
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
                        ) : videoSrc ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <video 
                                        src={videoSrc} 
                                        className="w-[110%] h-[110%] object-cover -translate-x-[0%] -translate-y-[5%]"
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
                        ) : videoSrc ? (
                            <div className="p-8 w-[700px]">
                                <div className={videoClassName || "w-full h-[450px] overflow-hidden"}>
                                    <video 
                                        src={videoSrc} 
                                        className="w-[110%] h-[110%] object-cover -translate-x-[0%] -translate-y-[5%]"
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
                    <div className="flex flex-col md:flex-row w-full p-4 gap-4">
                        <div className="flex flex-col justify-start w-1/2 items-center">
                            <h1 className="font-cram font-bold text-3xl">{headerText}</h1>
                        </div>
                        <div className="items-center justify-center w-1/2">
                            <p className="font-raleway font-semibold">{date}</p>
                            <p className="font-raleway">{bodyText}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Project;