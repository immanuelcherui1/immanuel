import { servicesData } from "../../data/data";

const Services = () => {
    
    return ( 
        <>
            <section id="services">
                <h1 className="section-title">What I Do</h1>
                <div className="grid md:grid-cols-3 md:gap-8 gap-4">
                    {servicesData.map((item, index) => (
                        <div key={index} className='p-4 bg-gray-800 rounded-xl shadow-lg'>
                            <h3 className="pb-4">{item.name}</h3>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
                <hr className="section-border"/> 
            </section>
        </>
     );
}
 
export default Services;