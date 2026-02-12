import React, { useEffect } from 'react';
import Line from '../components/Line'
import Project from '../components/Project'
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
    ];

    return (
        <div className="p-8">
            <div className="flex">
                <div className="mr-8">
                    <h1 className="text-4xl text-big_text font-cram font-bold mb-10 max-w-4xl ">
                    Marvelous Designer and the Exodus - Recreating Ancient Clothing as a New Way of
                    Experimental Archaeology
                    </h1>
                    <p className="font-raleway text-xl text-body_text leading-normal tracking-wider max-w-2xl mb-8">
                    This poster was created to showcase my work at the UC Cyber Archaeology Lab and was selected for presentation at the ASOR annual conference 2025. The purpose of this research is to create recreations of ancient garments using modern and immersive technologies. This was done by combining research of ancient textiles, tomb paintings, and 3D software, Marvelous Designer and Unreal Engine. The end result was 3D models of Shasu garments usable in video games at the EXODUS2 exhibit.
                    </p>
                    <div className="flex justify-center">
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

            </div>
            <div className="flex justify-center mt-16 mb-0">
                <h1 className="font-cram font-bold text-big_text text-4xl mb-0">Gallery</h1>
            </div>

        
            <div className="mt-16 mb-16">
                <Carousel images={carouselImages} />
            </div>


                        <div className="flex justify-center mt-16 mb-8"></div>


        </div>
    );
}

export default Research;