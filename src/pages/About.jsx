import React from 'react';


function About() {
    return (
        <div className="p-8">
            <div className="flex">
                <div className="mr-8">
                    <h1 className="text-6xl text-big_text font-cram font-bold mb-10">
                        Get to Know Me
                    </h1>
                    <p className="font-raleway text-xl text-body_text leading-normal tracking-wider" style={{ maxWidth: '200rem' }} >
                        The first thing to know about me is that I love art! I'm studying interdisciplinary computing and the arts as well as congitive science at UC San Diego. I spend my time outside of class hosting the radio show digimeow every monday on UCSD's KSDT radio station. I also spend my time hiking around San Diego and the San Francisco Bay Area, where I grew up. Thanks for taking the time to check out my website!
                    </p>
                    <div className="flex justify-center mt-12 mb-16">
            <a href="https://www.linkedin.com/in/eva-intoci-784461305/">
                <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text ">
                View my LinkedIn
                </button>
            </a>
            </div>
                </div>
                <div>
                    <img src="/images/about2.png"  className="w-[1200px] h-[400px] object-cover mb-40 border-2 border-gray-400" />
                </div>
            </div>
        </div>
    );
}

export default About;