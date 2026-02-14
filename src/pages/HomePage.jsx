import Project from "../components/Project";
import Line from "../components/Line";
import { Link } from "react-router-dom";

function HomePage() {
    const scrollToPortfolio = () => {
        const portfolioSection = document.getElementById("portfolio-section");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div className="md:flex-grow md:w-[45%] md:pl-16 md:pt-24 md:space-y-4">
                    <div className="flex flex-col justify-center md:justify-start">
                        <h1
                            className="text-big_text font-cram font-semibold mt-[-30px]"
                            style={{ fontSize: "5.5rem" }}
                        >
                            Eva S. Intoci
                        </h1>
                        <p
                            className="font-raleway text-2xl text-body_text leading-normal tracking-wider"
                            style={{ maxWidth: "41rem" }}
                        >
                            {" "}
                            I'm a creative designer pursuing videogame asset or
                            UI design. Currently I’m finishing my degree in
                            Interdisciplinary Computing and the Arts with a
                            minor in Congitive Science at UC San Diego.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pr-20 mt-10">
                    <img
                        src="/images/eva.jpg"
                        alt="Eva"
                        className="w-72 h-auto border-2 border-gray-400"
                    />
                </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 h-60 ">
                        <h1 className="text-big_text headers text-4xl font-cram ">
                            Portfolio
                        </h1>

                        <svg
                            viewBox="0 0 70 70"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-12 h-12 mt-4 animate-bounce cursor-pointer transition-colors text-[#1E1E1E] hover:text-[#82A3FF]"
                            onClick={scrollToPortfolio}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.3333 35L35 46.6667M35 46.6667L46.6667 35M35 46.6667V23.3333M64.1667 35C64.1667 51.1083 51.1083 64.1667 35 64.1667C18.8917 64.1667 5.83334 51.1083 5.83334 35C5.83334 18.8917 18.8917 5.83334 35 5.83334C51.1083 5.83334 64.1667 18.8917 64.1667 35Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div id="portfolio-section">
                <Project
                    imgSrc="/images/nathome.png"
                    headerText="Plant Atlas Redesign"
                    date="September 2025"
                    bodyText="As a part of my internship with the San Diego Natural History Museum, I redesigned the older plant atlas website to be more user friendly and in line with brand marketing."
                />
            </div>
            <div className="flex justify-center mt-4 mb-12">
                <Link to="/sdnhm">
                    <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text ">
                        View Full Project
                    </button>
                </Link>
            </div>

            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/katamari1.jpg"
                headerText="Katamari Prince 3D model"
                date="April 2025"
                bodyText="3D model of Katamari, made in Zbrush for printing or use in animation"
            />
            <div className="flex justify-center mt-4 mb-12">
                <a href="https://drive.google.com/drive/folders/1I-rwC_aA1HUVwk4KlewBxVfhhCzRwB3x?usp=drive_link">
                    <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text ">
                        View Full Project
                    </button>
                </a>
            </div>
            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/level.png"
                headerText="Sandwich Simulator"
                date="March 2024"
                bodyText="A sandwich making simulator created using P5js. "
            />
            <div className="flex justify-center mt-4 mb-12">
                <a href="https://drive.google.com/file/d/18DzXchOEYG2EhJAtTTyh0Kzuy6y-Fyyo/view?usp=sharing">
                    <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text ">
                        View Full Project
                    </button>
                </a>
            </div>
            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/somen1.png"
                headerText="Somen-Ya Menu"
                date="August 2024"
                bodyText="Multiple menu layouts I created to get to know Figma better."
            />
            <div className="flex justify-center mt-4 mb-12">
                <a href="https://www.figma.com/design/OMAs0EKr5PGNEOJifioTiM/Somen-Ya-Menus?node-id=0-1&m=dev&t=P6MhcH1yENxCeQ2m-1">
                    <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text ">
                        View Full Project
                    </button>
                </a>
            </div>
            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/bunny.jpg"
                headerText="Mitsuko's Gift"
                date="May 2022"
                bodyText="Still life painting of a Japanese rabbit doll. Acrylic on canvasboard. This piece was exhibited in the Abrams Claghorn Gallery in 2022"
            />
            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/onion.jpg"
                headerText="Green Onions"
                date="September 2022"
                bodyText="Still life study of green onions. Acrylic on canvas board"
            />
            <div className="flex justify-center mt-4 mb-8">
                <Line length="80%" color="#9CA3AF"></Line>
            </div>

            <Project
                imgSrc="/images/tofu.jpg"
                headerText="Tofu"
                date="June 2021"
                bodyText="Still life study of tofu. Acrylic on canvas board"
            />
            <div className="mt-12"> </div>
        </div>
    );
}

export default HomePage;
