import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.webp";

export default function Hero() {
 return <section className="hero-section" id="home" aria-labelledby="hero-title">
  <div className="hero-copy">
   <p className="eyebrow">OPEN TO INTERNSHIPS & COLLABORATIONS</p>
   <h1 id="hero-title">Hi, I’m Immanuel.<br/><span>I build and design.</span></h1>
   <p className="hero-description">Software developer, graphic designer and Computer Science student based in Kenya. I turn ideas into useful websites, clear visuals and practical digital solutions.</p>
   <div className="hero-actions"><a className="btn" href="#projects">Explore my work <FaArrowRight aria-hidden="true"/></a><a className="outline-btn" href="/immanuel-cheruiyot-resume.pdf" target="_blank" rel="noopener noreferrer">View resume ↗</a></div>
   <div className="social-links"><a href="https://github.com/immanuelcherui1" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true"/> GitHub</a><a href="https://www.linkedin.com/in/immanuel-cheruiyot/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true"/> LinkedIn</a><a href="mailto:immanuelcherui1@gmail.com"><FaEnvelope aria-hidden="true"/> Email</a></div>
  </div>
  <div className="portrait"><img src={hero} alt="Immanuel Cheruiyot" fetchPriority="high"/><div className="portrait-caption"><span>CODE MEETS CREATIVITY</span><p>Curious by nature.<br/>Learning by building.</p></div></div>
 </section>
}
