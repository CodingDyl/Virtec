import React, {useState, useEffect} from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Link, useLocation } from 'react-router-dom';
import { mainLogo } from '../assets';


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [navSize, setNavSize] = useState('h-[100px] p-[20px 20%]');
    const [hideLogo, setHideLogo] = useState('block');
    const [navRadius, setNavRadius] = useState('');
    const location = useLocation();

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('bg-virtec border-2 border-white/[0.2]');
        setNavSize('h-auto w-[80%] md:w-[30%] top-2 p-[10px 10%]');
        setNavRadius('rounded-2xl');
        setHideLogo('flex md:hidden')
      } else {
        setBgColor('bg-transparent');
        setNavSize('h-auto w-full top-0 center p-[20px 20%]');
        setNavRadius('');
        setHideLogo('flex');
      }
    };

    useEffect(() => {
        // Extract the pathname from the location object and set it as active
        const path = location.pathname;
        const activeLink = navLinks.find(link => link.id === path || (link.id === "/" && path === ""));
        setActive(activeLink ? activeLink.title : "");

        window.scrollTo(0, 0);

        handleScroll();

      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

  return (
    <nav className={`${styles.paddingNavX} fixed z-50 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${bgColor} ${navSize} ${navRadius}`}>
      <div className="h-10 md:h-20 w-full flex justify-around items-center max-w-7xl mx-auto">
        <Link to="/" className={`${hideLogo} items-center gap-2`} onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={mainLogo} alt="logo" className="h-4 xs:h-2 md:h-7 w-full object-cover border-0" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`relative group ${active === link.title ? "text-blue-600" : "text-white"} hover:text-blue-600 text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <Link to={link.id} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
              {link.title}
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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