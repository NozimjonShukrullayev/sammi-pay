import { useState } from "react"
import { close, menu } from "../assets"
import { navigationLinks } from "../util/constants"
import { styles } from "../util/style"

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleHandler = () => setToggleNav(prev => !prev);
  const activeLinkHandler = (id) => {
    setActiveLink(id);
    toggleHandler();
  };

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <a href="/">
        <p className={`text-2xl text-white italic cursor-pointer`}>sammi<span className="text-cyan-300">Pay</span></p>
      </a>

      {/* Navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px] ${idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"} ${activeLink === nav.id ? "text-white" : "text-lightWhite"} hover:text-white transition-all duration-500`} onClick={() => activeLinkHandler(nav.id)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}  
      </ul>

      {/* navigation media btn */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggleNav ? close : menu} alt="navBtn" className="cursor-pointer w-[30px] h-[30px] object-contain" onClick={toggleHandler} />
      </div>
      
      {/* media navbar */}
      <div className={`${toggleNav ? 'flex' : 'hidden'} sm:hidden p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient z-[99]`}>
        <ul className="list-none flex flex-col justify-center items-center flex-1">
          {navigationLinks.map((nav, idx) => (
            <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px] ${idx === navigationLinks.length - 1 ? "mb-0" : "mb-5"} ${activeLink === nav.id ? "text-white" : "text-lightWhite"} hover:text-white transition-all duration-500`} onClick={() => activeLinkHandler(nav.id)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}  
        </ul>
      </div>
    </div>
  )
}

export default Navbar
