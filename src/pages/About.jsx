import React from 'react';


function About() {
    return (
        <div className="p-8">
            <div className="flex">
                <div className="mr-8">
                    <h1 className="text-6xl text-big_text font-cram font-bold mb-20">
                        Get to Know Me
                    </h1>
                    <p className="font-josefin text-2xl text-body_text leading-none">
                        The first thing to know about me is that I love art! I'm studying interdisciplinary computing and the arts as well as congitive science at UC San Diego. I spend my time outside of class hosting the radio show digimeow every monday on UCSD's KSDT radio station. I also spend my time hiking around San Diego and the San Francisco Bay Area, where I grew up. Thanks for taking the time to check out my website!
                    </p>
                    <div className="flex justify-center mt-12 mb-16">
            <a href="https://www.linkedin.com/in/eva-intoci-784461305/">
                <button className="bg-slate-400 text-white font-josefin px-6 py-3 rounded-2xl hover:bg-big_text ">
                View my LinkedIn
                </button>
            </a>
            </div>
                </div>
                <div>
                    <img src="/images/about.png"  className="w-[2000px] h-[300px] object-cover mb-40" />
                </div>
            </div>
        </div>
    );
}

export default About;