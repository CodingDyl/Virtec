import React, {useState, useEffect} from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Link, useLocation } from 'react-router-dom';
import { mainLogo } from '../assets';


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Extract the pathname from the location object and set it as active
        const path = location.pathname;
        const activeLink = navLinks.find(link => link.id === path || (link.id === "/" && path === ""));
        setActive(activeLink ? activeLink.title : "");
    }, [location]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center p-[20px 10%] fixed top-0 left-0 z-10 bg-black/20 md:bg-transparent`}>
      <div className="h-10 md:h-20 w-full flex justify-around items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={mainLogo} alt="logo" className="h-4 xs:h-2 md:h-7 w-full object-cover border-0" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-blue-600" : "text-white"} hover:text-blue-600 text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
              <MdClose
                  className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                  onClick={() => setToggle(!toggle)}
              />
          ) : (
              <MdMenu
                  className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                  onClick={() => setToggle(!toggle)}
              />
          )}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[rgba(0,0,0,0.7)] z-10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-black border-blue-500 border-2 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-blue-500" : "text-white-100"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                  {link.title == "Blog" ? <Link to="/blog">{link.title}</Link> : <a href={`${link.id}`}>
                {link.title}
              </a>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar