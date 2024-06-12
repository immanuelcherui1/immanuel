import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import hero from "../../assets/hero.png"
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return ( 
        <section className="min-h-screen md:mb-0 mb-8" id="about">
            <div className="grid md:grid-cols-2 md:gap-8 gap-4 md:pt-12 pt-6">
                <div className="flex flex-col gap-4">
                    <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-extrabold">
                        Hi, I'm <span className="md:ml-2 ml-1 text-cyan-400">Immanuel</span> <span className="md:ml-2 ml-1 text-cyan-600">Cheruiyot</span>
                    </h1>
                    <p className="md:text-2xl font-medium text-cyan-300">
                        <Typewriter
                            words={[
                                'Fullstack Developer.', 
                                'Graphics Designer.', 
                                'UI/UX Designer.'
                            ]}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={3000}
                            />
                    </p>
                    <p className="font-light">
                        Experienced Full Stack Developer with a demonstrated history of 
                        working in the internet industry. Building Web applications with
                         React, Javascript, Python, Flask,SQLAlchemy, MySQL/Postgres 
                         and some other cool libraries and frameworks.
                    </p>
                    <div>
                        <button className="btn  ">
                          <a href="https://docs.google.com/document/d/1uxhVmRS5g38cvge-AUgSgoOHZnt34gKiIE5025k67lE/edit?usp=sharing" 
                            target="_blank" rel="noopener noreferrer">
                                View Resume
                            </a>  
                        </button>
                        <button className="btn  ml-6">
                            <a href="#contact">Contact Me</a>
                        </button>
                    </div>
                    <div>
                        <button className="icon-btn"><a href="https://github.com/immanuelcherui1" target="_blank" rel="noopener noreferrer"><FaGithub /></a></button>
                        <button className="icon-btn"><a href="https://www.linkedin.com/in/immanuel-cheruiyot-datusjnr001/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> </button>
                        <button className="icon-btn"><FaGoogle /></button>
                        <button className="icon-btn"><a href="https://twitter.com/IMMANUELCHERUI1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></button>
                    </div>
                </div>

                <div className="flex  items-center justify-center">
                    <div className="md:px-8 px-4 pt-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl shadow-slate-800 hover:shadow-slate-800">
                        <img className="sm:max-h-80 " src={hero} alt="Hero Image" />
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Hero;