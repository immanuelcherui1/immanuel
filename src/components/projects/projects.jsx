import { projectsData } from "../../data/data";

const Projects = () => {
    return ( 
        <section id="projects">
            <div>
                <h1 className="section-title">Websites</h1>
                <div className="grid md:grid-cols-3 md:gap-8 sm:gap-8 gap-4">
                    {projectsData.map((item, index) => (
                        <div key={index} className='md:p-4 p-3 border border-dashed border-slate-500 shadow shadow-slate-700 rounded-md'>
                            <div>
                                <img className="rounded-md" src={item.image} alt="" />
                            </div>
                            <a href={item.link} target="_blank">
                                <div className="md:pt-4 pt-2">
                                    <h3 className="mb-2 font-semibold ">{item.name}</h3>
                                    <p className="font-light text-sm">{item.details}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className="section-title">Websites</h1>
                    <div className="grid md:grid-cols-3 md:gap-8 sm:gap-8 gap-4">
                      {projectsData.filter(p => p.type === "website").map((item, index) => (
                        <div key={index} className='md:p-4 p-3 border border-dashed border-slate-500 shadow shadow-slate-700 rounded-md'>
                          <div>
                            <img className="rounded-md" src={item.image} alt="" />
                          </div>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="md:pt-4 pt-2">
                              <h3 className="mb-2 font-semibold">{item.name}</h3>
                              <p className="font-light text-sm">{item.details}</p>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                <div className="md:mt-12 mt-4 flex justify-center items-center">
                    <a className="btn" href="https://github.com/immanuelcherui1" target='_blank' >More Projects</a>
                </div>
            </div>
            <hr className="section-border"/> 
        </section>
     );
}
 
export default Projects;
