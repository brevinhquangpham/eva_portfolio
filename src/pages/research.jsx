import React, { useEffect } from 'react';
import Carousel from '../components/Carousel'

function Research() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const carouselImages = [
        { youtubeEmbedId: 'ehGu64XqWLs' },
        '/images/shasu2.jpg',
        '/images/shasu1.png',
        '/images/shasu4.png',
        '/images/shasu3.png',
        '/images/hall.png',
    ];

    return (
        <div className="px-4 md:px-12 lg:px-20 pb-16 md:pb-24">
            <div className="flex flex-col md:flex-row-reverse justify-between gap-6 md:gap-16">
                <div className="w-full md:flex-grow md:w-[45%] pl-3 md:pl-16 pt-0 md:pt-8 space-y-0 md:space-y-12">
                    <h1 className="text-big_text font-cram font-semibold mt-0 md:mt-0 text-3xl md:text-[3rem]">
                        Marvelous Designer and the Exodus
                    </h1>
                    <p className="font-raleway text-xs md:text-2xl text-body_text leading-normal tracking-wider max-w-full md:max-w-[41rem] mt-4 md:mt-0">
                        This poster was created to showcase my work at the UC Cyber Archaeology Lab and was selected for presentation at the ASOR annual conference 2025. The purpose of this research is to create recreations of ancient garments using modern and immersive technologies. This was done by combining research of ancient textiles, tomb paintings, and 3D software, Marvelous Designer and Unreal Engine. The end result was 3D models of Shasu garments usable in video games at the EXODUS2 exhibit.
                    </p>
                    {/* Button desktop only — lives inside the text column */}
                    <div className="hidden md:flex justify-center">
                        <a href="https://docs.google.com/document/d/1TGwac2fhuqRoaOh1ZeaZjeBXhyQqkGoaSgnpEhYNBBA/edit?usp=sharing">
                            <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                                Read Abstract
                            </button>
                        </a>
                    </div>
                </div>

                <img
                    src="/images/poster.jpeg"
                    alt="Eva S. Intoci"
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 object-contain"
                />

                {/* Button mobile only — sits below the image */}
                <div className="flex md:hidden justify-center">
                    <a href="https://docs.google.com/document/d/1TGwac2fhuqRoaOh1ZeaZjeBXhyQqkGoaSgnpEhYNBBA/edit?usp=sharing">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            Read Abstract
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex justify-center mt-16 mb-0">
                <h1 className="font-cram font-bold text-big_text text-2xl mb-0">Gallery</h1>
            </div>

            <div className="mt-16 mb-16">
                <Carousel images={carouselImages} />
            </div>

            <div className="flex justify-center mt-16 mb-8"></div>
        </div>
    );
}

export default Research;