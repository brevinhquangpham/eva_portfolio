import React from 'react';

function About() {
    return (
        <div className="px-4 md:px-0 pb-16 md:pb-24">
        <div className="flex flex-row md:flex-row-reverse justify-between gap-6 md:gap-16">
        <div className="w-3/5 pl-3 md:flex-grow md:w-[45%] md:pl-16 pt-0 md:pt-24 space-y-0 md:space-y-12">
        <h1 className="text-big_text font-cram font-semibold mt-0 md:mt-[-30px] text-3xl md:text-[4rem]">                    Get to Know Me
                </h1>
                <p className="font-raleway text-xs md:text-2xl text-body_text leading-normal tracking-wider max-w-full md:max-w-[41rem] mt-4 md:mt-0">
                The first thing to know about me is that I love art, whether it's 
                in a museum, an album, or a film! I explored this passion for 
                four years at UC San Diego, where I got to combine it with my 
                love of 3D modeling and digital fabrication. I've worked in a 
                unique range of environments, from research labs and art galleries to toy 
                design studios. Outside of work, I spend my time hiking around
                 the San Francisco Bay Area, where I grew up,
                  as well as learning about and collecting houseplant species. 
                  Thanks for taking the time to check out my website!
                </p>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center md:pr-20 md:ml-10">
                <img
                    src="/images/eva.jpg"
                    alt="Eva"
                    className="w-52 md:w-72 h-auto border-2 border-gray-400"
                />
            </div>
        </div>
        </div>
    );
}

export default About;