import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSelector from './NavBarSelector'

function NavBarElement({ linkTo, text }) {
    return (
        <div className="relative inline-block overflow-visible">
            <Link
                to={linkTo}
                className="animate__tada block relative text-headers z-10 hover:text-big_text font-cram font-medium text-3xl"
            >
                {text}
            </Link>
        </div>
    );
}

function NavBar() {
    return (
        <nav>
            <ul className="flex space-x-8 pt-4 justify-end pr-16">
                <NavBarElement linkTo={"/"} text={"Home"} />
                <div className="h-8 w-px bg-gray-400"></div>
                <NavBarElement linkTo={"/About"} text={"About"} />
                <div className="h-8 w-px bg-gray-400"></div>

                <NavBarElement linkTo={"https://docs.google.com/document/d/1n2a0fq75VV1sYp70X7wVhjOisWKy0W1HOn36toQx0jc/edit?usp=sharing"} text={"Resume"} />
            </ul>
        </nav>
    );
}

export default NavBar;
