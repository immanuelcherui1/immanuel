import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";
import Services from "../components/services/services";
import Skills from "../components/skills/skills";

const Home = () => {
    return ( 
        <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
        </>
     );
}
 
export default Home;