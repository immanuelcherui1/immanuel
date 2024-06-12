import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menus = [
        {name: "About", route: "#about"},
        {name: "Services", route: "#services"},
        {name: "Skills", route: "#skills"},
        {name: "Experience", route: "#experience"},
        {name: "Projects", route: "#projects"},
        {name: "Contact", route: "#contact"},
    ]

    return ( 
        <>
            <nav className='md:px-32 px-4 py-4 top-0 left-0 sticky z-[100] bg-gray-900 text-gray-200 opacity-80 shadow-xl '>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl font-semibold '>
                            Immanuel.
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-400">
                            {open ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-white                                                                                                           M m n '>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li  
                                        className='md:mx-3 md:my-0 my-4 '
                                        onClick={() => setOpen((prev) => !prev)}
                                    >
                                        <a href={item.route}>
                                            {item.name}
                                        </a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-gray-800`}>
                    <ul className="flex flex-col justify-center mt-8 text-base font-medium">
                        {menus.map((item, index) => (
                            <div key={index}>
                                <li onClick={() => setOpen((prev) => !prev)} className='md:mx-3 md:my-0 my-4 '>
                                    <a href={item.route}>
                                        {item.name}
                                    </a>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;