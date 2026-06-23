import React, { useEffect } from 'react';
import Project from '../components/Project'

function SDNHM() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="px-4 pb-16 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="md:mr-8">
                    <h1 className="text-3xl md:text-6xl text-big_text font-cram font-bold mb-4 md:mb-10">
                        Plant Atlas Redesign
                    </h1>
                    <p className="font-raleway text-xs md:text-xl text-body_text leading-normal tracking-wider max-w-full md:max-w-2xl mb-4 md:mb-8">
                        During my summer internship at the San Diego Natural History Museum, I redesigned their plant atlas website. I created multiple prototypes based on the expressed needs and wants of the botanists I was working with. The primary goal of the redesign was to simplify redundancy while taking into account that too much change will negatively impact the botanists who use this site for work on a daily basis. I also collaborated with the marketing team to ensure the redesign aligned with the museum's brand identity.
                    </p>
                    {/* Button desktop only — lives inside the text column */}
                    <div className="hidden md:flex justify-center">
                        <a href="https://www.figma.com/design/EjIjdFm9aY2BtFgviSnxoi/Plant-Atlas-SDNHM?node-id=0-1&t=n4LTMP7WFiZEpfMR-1">
                            <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                                View pages on Figma
                            </button>
                        </a>
                    </div>
                </div>

                <div className="relative w-full aspect-video overflow-hidden px-4 md:px-0 md:w-[700px] md:h-[420px] md:aspect-auto md:ml-auto md:-mt-8">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 md:scale-x-105 md:scale-y-110"
                        src="https://www.youtube.com/embed/DLZj7U0QWcQ?autoplay=1&mute=1&loop=1&playlist=DLZj7U0QWcQ&controls=0&modestbranding=1&rel=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Button mobile only — sits below the video */}
            <div className="flex md:hidden justify-center mt-6">
                <a href="https://www.figma.com/design/EjIjdFm9aY2BtFgviSnxoi/Plant-Atlas-SDNHM?node-id=0-1&t=n4LTMP7WFiZEpfMR-1">
                    <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                        View pages on Figma
                    </button>
                </a>
            </div>

            <div className="flex justify-center mt-0 mb-8">
            </div>

            <Project 
                youtubeEmbedId="uJW4dra1s4k"
                videoClassName="w-full aspect-video md:w-[700px] md:h-[450px] overflow-hidden"
                videoScaleWidth={105}
                videoScaleHeight={110}
                headerText="Search Page" 
                date="" 
                bodyText="This search function allows for users to search the museums 
                database of specimens found in San Diego/ Imperial counties. This tool 
                can be a great way to uderstand which member of certain genuses are present in 
                San Diego as well as finding information of a specimen by specific epithet." 
            />
            
            <div className="flex justify-center mt-16 mb-8"></div>

            <Project 
                youtubeEmbedId="X4c77AnD7O0"
                videoClassName="w-full aspect-video md:w-[720px] md:h-[450px] overflow-hidden"
                videoScaleWidth={110}
                videoScaleHeight={110}
                headerText="Map Page" 
                date="" 
                bodyText="This map function was made via feedback on the page's multiple previous mapping functions.
                This page's purpose is to allow botanists to map specimens across different types of maps, view detailed information for each data point, compare multiple species or genera at once,
                 and export their results." 
            />
        </div>
    );
}

export default SDNHM;