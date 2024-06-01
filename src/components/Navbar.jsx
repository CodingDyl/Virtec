import React, {useState} from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { mainLogo } from '../assets';


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 absolute top-0 z-10 bg-black/20 md:bg-transparent`}>
      <div className="h-20 w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={mainLogo} alt="logo" className="h-5 w-full object-cover border-0" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-white"} hover:text-tertiary text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              {link.title == "Blog" ? <Link to="/blog">{link.title}</Link> : <a href={`${link.id}`}>
                {link.title}
              </a>}
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