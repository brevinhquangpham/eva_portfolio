
import Project from '../components/Project'
import Line from '../components/Line'

function HomePage() {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div className='md:flex-grow md:w-[45%] md:pl-16 md:pt-24 md:space-y-4'>
                    <div className="flex flex-col justify-center md:justify-start">
                        <h1 className="text-big_text text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-cram font-semibold">
                            Eva S. Intoci
                        </h1>
                        <p className="font-josefin text-2xl text-body_text leading-none"> I'm a creative designer pursuing videogame asset or UI design. Currently I’m finishing my degree in Interdisciplinary Computing and the Arts with a minor in Congitive Science at UC San Diego. :)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pr-10">
                    <img src="/images/eva.jpg" alt="Eva" className="w-72 h-auto" />
                </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
                <div>
                    <div className="flex flex-col items-center justify-center gap-2 h-96 mt-[-20px]">
                        <h1 className="text-big_text headers text-4xl font-cram">Portfolio
                        
                        </h1>
                        <img src="/images/ArrowDownCircle.svg" alt="yo" className="w-12 h-12" />
                    </div>
                </div>


            </div>


            <Project imgSrc="/images/katamari1.jpg"  headerText="Katamari Prince 3D model" date="April 2025" bodyText="3D model of Katamari, made in Zbrush for printing or use in animation" />
            <div className="flex justify-center mt-4 mb-12">
            <a href="https://drive.google.com/drive/folders/1I-rwC_aA1HUVwk4KlewBxVfhhCzRwB3x?usp=drive_link">
                <button className="bg-slate-400 text-white font-josefin px-6 py-3 rounded-2xl hover:bg-big_text ">
                View Full Project
                </button>
            </a>
            </div>

            <Project imgSrc="/images/level.png"  headerText="Sandwich Simulator" date="March 2024" bodyText="A sandwich making simulator created using P5js. " />
            <div className="flex justify-center mt-4 mb-12">
            <a href="https://drive.google.com/file/d/18DzXchOEYG2EhJAtTTyh0Kzuy6y-Fyyo/view?usp=sharing">
                <button className="bg-slate-400 text-white font-josefin px-6 py-3 rounded-2xl hover:bg-big_text ">
                View Full Project
                </button>
            </a>
            </div>
            <Project imgSrc="/images/somen1.png"  headerText="Somen-Ya Menu" date="August 2024" bodyText="Multiple menu layouts I created to get to know Figma better." />
            <div className="flex justify-center mt-4 mb-12">
            <a href="https://www.figma.com/design/OMAs0EKr5PGNEOJifioTiM/Somen-Ya-Menus?node-id=0-1&m=dev&t=P6MhcH1yENxCeQ2m-1">
                <button className="bg-slate-400 text-white font-josefin px-6 py-3 rounded-2xl hover:bg-big_text ">
                View Full Project
                </button>
            </a>
            </div>
            <Project imgSrc="/images/bunny.jpg" headerText="Mitsuko's Gift" date="May 2022" bodyText="Still life painting of a Japanese rabbit doll. Acrylic on canvasboard. This piece was exhibited in the Abrams Claghorn Gallery in 2022" />
            <Project imgSrc="/images/onion.jpg" headerText="Green Onions" date="September 2022" bodyText="Still life study of green onions. Acrylic on canvas board" />
            <Project imgSrc="/images/tofu.jpg" headerText="Tofu" date="June 2021" bodyText="Still life study of tofu. Acrylic on canvas board" />

        </div>


    )
}

export default HomePage
