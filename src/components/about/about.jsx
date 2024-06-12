import aboutImg from "../../assets/about.svg"
const About = () => {
    return ( 
        <section id="about">
            <div className="grid sm:grid-cols-2">
                <div>
                    <img src={aboutImg} alt="About Image" />
                </div>

                <div>
                    <h1 className="section-title">Who I Am</h1>
                    <div className="md:space-y-8 space-y-4">
                        <p>I am a Full Stack Developer based in Kenya, with a passion for creating beautiful and intuitive user experiences.</p>
                        <p>I have a strong background in both front-end and back-end development. I am a self-motivated, hard-working and dedicated individual. Also team player, and always looking to learn new skills and techniques.</p>
                        <p>
                            <span> I do integration of third party services such as Firebase/ Supabase / Digital Ocean / Mailchimp and also have experience in building RESTful APIs.</span>
                            <span> I also do integration of payment services such as M-Pesa, Paypal and Stripe</span>
                        </p>
                    </div>
                    <button className="md:mt-8 mt-4">
                        <a className="btn" href="#contact">Hire Me</a>
                    </button>
                </div>
            </div>
            <hr className="section-border"/>  
        </section>
     );
}
 
export default About;