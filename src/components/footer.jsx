import { FaChevronUp } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear()
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return ( 
        <footer className="bg-slate-700 text-white md:py-3 py-3 px-3 md:text-base text-sm">
            <div className="flex items-center justify-center">
                <p>
                    © Immanuel Cheruiyot | All rights reserved |
                    <span className="ml-1 text-cyan-400">{year}</span>
                </p>
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-8 md:p-4 p-3 bg-cyan-500 text-white rounded-full shadow-md focus:outline-none"
                >
                    <FaChevronUp />
            </button>
        </footer>
     );
}
 
export default Footer;