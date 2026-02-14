import React from 'react';
import Line from '../components/Line'
import Project from '../components/Project'

function SDNHM() {
    return (
        <div className="p-8">
            <div className="flex">
                <div className="mr-8">
                    <h1 className="text-6xl text-big_text font-cram font-bold mb-10">
                        Plant Atlas Redesign
                    </h1>
                    <p className="font-raleway text-xl text-body_text leading-normal tracking-wider max-w-2xl mb-8">
                        During my summer internship at the San Diego Natural History Museum, I redesigned their plant atlas website. I created multiple prototypes based on the expressed needs and wants of the botanists I was working with. The primary goal of the redesign was to simplify redundancy while taking into account that too much change will negatively impact the botanists who use this site for work on a daily basis. I also collaborated with the marketing team to ensure the redesign aligned with the museum's brand identity.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://www.figma.com/design/EjIjdFm9aY2BtFgviSnxoi/Plant-Atlas-SDNHM?node-id=0-1&t=n4LTMP7WFiZEpfMR-1">
                            <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                                View pages on Figma
                            </button>
                        </a>
                    </div>
                </div>
                <div className="w-[750px] h-[450px] overflow-hidden mb-40">
                    <video 
                        src="/images/homepage.mov" 
                        className="w-[110%] h-[110%] object-cover -translate-x-[0%] -translate-y-[5%]"
                        autoPlay 
                        loop 
                        muted
                    />
                </div>
            </div>

            <div className="flex justify-center mt-0 mb-8">
            </div>

            <Project 
                videoSrc="/images/synoptic.mov" 
                videoClassName="w-[720px] h-[450px] overflow-hidden"
                headerText="Search Page" 
                date="" 
                bodyText="This search function allows for users to search the museums 
                database of specimens found in San Diego/ Imperial counties. This tool 
                can be a great way to uderstand which member of certain genuses are present in 
                San Diego as well as finding information of a specimen by specific epithet." 
            />
                        <div className="flex justify-center mt-16 mb-8"></div>


                <Project 
                videoSrc="/images/map.mov" 
                videoClassName="w-[720px] h-[450px] overflow-hidden"
                headerText="Map Page" 
                date="" 
                bodyText="This map function was made via feedback on the page's multiple previous mapping functions.
                This page's purpose is to allow botanists to map specimens across different types of maps, view detailed information for each data point, compare multiple species or genera at once,
                 and export their results. " 
            />
        </div>
    );
}

export default SDNHM;