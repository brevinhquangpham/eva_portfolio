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
        <div className="px-4 md:px-0">
            <div className="flex flex-row-reverse md:flex-row justify-between">
            <div className="w-3/5 pl-3 md:flex-grow md:w-[45%] md:pl-16 pt-0 md:pt-24 space-y-0 md:space-y-12">                              <h1 className="text-big_text font-cram font-semibold mt-0 md:mt-[-30px] text-4xl md:text-[5.5rem]">
                        Eva S. Intoci
                    </h1>
                    <p className="font-raleway text-xs md:text-2xl text-body_text leading-normal tracking-wider max-w-full md:max-w-[41rem] mt-4 md:mt-0">
                        Hello! I'm a creative designer passionate about both physical and digital fabrication. 
                        I studied Interdisciplinary Computing and the Arts at UC San Diego, with a minor in Cognitive Science. 
                        I've worked on a range of projects, from simulating blood vessels to experimental archaeology,
                        and I'm always looking for imaginative ways to make things work.
                    </p>
                </div>
               <div className="w-2/5 flex flex-col justify-center items-center md:pr-20">
    <img
        src="/images/conpic.jpg"
        alt="Eva"
        className="w-52 md:w-72 h-auto border-2 border-gray-400"
    />
</div>
            </div>

            <div className="mx-auto flex justify-center items-center">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 h-60 md:h-60">
                        <h1 className="text-big_text headers text-4xl font-cram">
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
                <div>
                    <Project
                        carouselImages={[
                            "/images/altar1.png",
                            "/images/altar2.png",
                            "/images/altar3.png",
                            "/images/altar4.png",
                            "/images/altar5.png",
                            "/images/altar6.png",
                        ]}
                        headerText="Altar"
                        date="June 2026"
                        bodyText="Altar is a pine wood cabinet with a CNC facade. I designed the model of the facade using Shapr3D and Autodesk Fusion."
                    />
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <div>
                    <Project
                        carouselImages={[
                            "/images/beep7.png",
                            "/images/face.png",
                            "/images/beep8.png",
                            "/images/bobeep3.png",
                            "/images/bobeep4.png",
                        ]}
                        headerText="Bo Beep"
                        date="June 2026"
                        bodyText="Bo Beep is a figurine I created for my ICAM senior exhibition. This project was made in Blender and Marvelous Designer, 3D printed, then hand painted and glazed."
                    />
                </div>
                <div className="flex justify-center mt-4 mb-12">
                    <Link to="https://renderstuff.com/tools/360-panorama-web-viewer-sharing/?image=https://live.staticflickr.com/65535/55316732118_37e71b1067_b.jpg">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            View digital companion
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <div>
                    <Project
                        imgSrc="/images/poster.jpeg"
                        headerText="Research on Ancient Garment Recreation"
                        date="November 2025"
                        bodyText="Recreations of 16th centure B.C.E Shasu Garments. Made in Marvelous Designer and displayed in Unreal Engine 5."
                    />
                </div>
                <div className="flex justify-center mt-4 mb-12">
                    <Link to="/research">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            View Full Project
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/nathome.png"
                    headerText="Plant Atlas Redesign"
                    date="September 2025"
                    bodyText="As a part of my internship with the San Diego Natural History Museum, I redesigned the older plant atlas website to be more user friendly and in line with brand marketing."
                />
                <div className="flex justify-center mt-4 mb-12">
                    <Link to="/sdnhm">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            View Full Project
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
    carouselImages={[
        "/images/katamari1.jpg",
        "/images/katamari2.jpg",
        "/images/katamari3.jpg",
    ]}
    headerText="Katamari Prince 3D model"
    date="April 2025"
    bodyText="3D model of Katamari, made in Zbrush for printing or use in animation"
/>
               
                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/level.png"
                    headerText="Sandwich Simulator"
                    date="March 2024"
                    bodyText="A sandwich making simulator created using P5js."
                />
                <div className="flex justify-center mt-4 mb-12">
                    <a href="https://drive.google.com/file/d/18DzXchOEYG2EhJAtTTyh0Kzuy6y-Fyyo/view?usp=sharing">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            View Full Project
                        </button>
                    </a>
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/somen1.png"
                    headerText="Somen-Ya Menu"
                    date="August 2024"
                    bodyText="Multiple menu layouts I created to get to know Figma better."
                />
                <div className="flex justify-center mt-4 mb-12">
                    <a href="https://www.figma.com/design/OMAs0EKr5PGNEOJifioTiM/Somen-Ya-Menus?node-id=0-1&m=dev&t=P6MhcH1yENxCeQ2m-1">
                        <button className="bg-slate-400 text-white font-raleway px-6 py-3 rounded-2xl hover:bg-big_text">
                            View Full Project
                        </button>
                    </a>
                </div>

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/bunny.jpg"
                    headerText="Mitsuko's Gift"
                    date="May 2022"
                    bodyText="Still life painting of a Japanese rabbit doll. Acrylic on canvasboard. This piece was exhibited in the Abrams Claghorn Gallery in 2022"
                />

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/onion.jpg"
                    headerText="Green Onions"
                    date="September 2022"
                    bodyText="Still life study of green onions. Acrylic on canvas board"
                />

                <div className="flex justify-center mt-4 mb-8">
                    <Line length="80%" color="#9CA3AF" />
                </div>

                <Project
                    imgSrc="/images/tofu.jpg"
                    headerText="Tofu"
                    date="June 2021"
                    bodyText="Still life study of tofu. Acrylic on canvas board"
                />

                <div className="mt-12" />
            </div>
        </div>
    );
}

export default HomePage;