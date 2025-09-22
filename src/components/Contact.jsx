import React from 'react'
import Line from './Line'

function ContactLine({ text }) {
    return (
        <p className="font-josefin font-body_text text-l">{text}</p>
    )
}

function Contact() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full">
                <div className="flex justify-end">
                    <Line length="96%" color="#0F0ADE"></Line>
                </div>
                <h1 className="pl-[5%] text-3xl font-cram text-headers mb-2">
                    Contact
                </h1>
                <div className="flex justify-between mb-2">
                    <div className="pl-[6%]">
                        <ContactLine text="email:" />
                        <ContactLine text="evaintoci@gmail.com" />
                        <ContactLine text="phone:" />
                        <ContactLine text="(510)990-5714" />
                    </div>
                    <div className="flex items-center pr-[20%] -mt-4 sm:pr-[10%]">
                        <div className="flex items-center gap-5">
                            <img src="/images/Linkedin.svg" alt="linkedin" className="w-auto h-8" />
                            <a href="https://www.linkedin.com/in/eva-intoci-784461305" className="underline font-josefin text-big_text">Connect with me on Linkedin</a>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact
