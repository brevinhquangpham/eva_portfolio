import React from 'react';

function Project({ imgSrc, headerText, bodyText, date }) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <img src={imgSrc} alt="img" className="p-10 w-900 h-500" />
            </div>
            <div className="flex w-full p-4">
                <div className="flex flex-col justify-start w-1/2 items-center">
                    <h1 className="font-cram font-bold text-4xl">{headerText}</h1>
                </div>
                <div className="items-center justify-center w-1/2">
                    <p className="font-josefin">{date}</p>
                    <p className="font-josefin">{bodyText}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;
