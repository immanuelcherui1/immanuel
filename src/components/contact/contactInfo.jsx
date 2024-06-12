import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import contactImg from "../../assets/contact.svg"

const ContactInfo = () => {
    
    return ( 
        <div>
            <div className="">
                <div>
                    <img src={contactImg} alt="" />
                </div>
            </div>
            <p className="">
                Phone: +254702083573 <br />
                Email: immanuelcherui1@gmail.com <br />
            </p>
            <p className="mt-2 font-medium text-slate-400">FIND WITH ME</p>
            <div>
                <button className="icon-btn"><a href="https://github.com/immanuelcherui1" target="_blank" rel="noopener noreferrer"><FaGithub /></a></button>
                <button className="icon-btn"><a href="https://www.linkedin.com/in/immanuel-cheruiyot-datusjnr001/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> </button>
                <button className="icon-btn"><FaGoogle /></button>
                <button className="icon-btn"><a href="https://twitter.com/IMMANUELCHERUI1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></button>
            </div>
        </div>
     );
}
 
export default ContactInfo;