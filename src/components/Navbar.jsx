import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";

import CV from "../assets/front_end_resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed top-0 w-full h-[80px] flex justify-between items-center px-6 md:px-10 bg-white/80 text-slate-700 backdrop-blur-lg border-b border-white/60 shadow-sm z-50">
      <div>
        <img
          src={Logo}
          alt="Aaron Bryant logo"
          className="w-44 max-w-full select-none drop-shadow-sm"
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
        <li className="transition-colors duration-200 hover:text-[#6a9ae6]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="transition-colors duration-200 hover:text-[#6a9ae6]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="transition-colors duration-200 hover:text-[#6a9ae6]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="transition-colors duration-200 hover:text-[#6a9ae6]">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="transition-colors duration-200 hover:text-[#6a9ae6]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-2xl text-slate-600 hover:text-[#6a9ae6] transition-colors duration-200"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white text-slate-700 flex flex-col justify-center items-center gap-8"
        }
      >
        <li className="text-3xl font-semibold tracking-wide">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-3xl font-semibold tracking-wide">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-3xl font-semibold tracking-wide">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-3xl font-semibold tracking-wide">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-3xl font-semibold tracking-wide">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-1/2 left-0 translate-y-1/2 transform">
        <ul>
          <li className="w-[180px] h-[56px] flex justify-between items-center ml-[-120px] hover:ml-[-16px] duration-300 bg-[#3b82f6] text-white rounded-r-full shadow-lg/50">
            <a
              className="flex justify-between items-center w-full px-5"
              href="https://www.linkedin.com/in/aaron-bryant-dev/"
            >
              Linkedin <FaLinkedin size={24} />
            </a>
          </li>
          <li className="w-[180px] h-[56px] flex justify-between items-center ml-[-120px] hover:ml-[-16px] duration-300 bg-[#1f2937] text-white rounded-r-full shadow-lg/50">
            <a
              className="flex justify-between items-center w-full px-5"
              href="https://github.com/Aaronlb912"
            >
              Github <FaGithub size={24} />
            </a>
          </li>
          <li className="w-[180px] h-[56px] flex justify-between items-center ml-[-120px] hover:ml-[-16px] duration-300 bg-[#22c55e] text-white rounded-r-full shadow-lg/50">
            <a
              className="flex justify-between items-center w-full px-5"
              href="mailto:aaronbryantdev@gmail.com"
            >
              Email <HiOutlineMail size={24} />
            </a>
          </li>
          <li className="w-[180px] h-[56px] flex justify-between items-center ml-[-120px] hover:ml-[-16px] duration-300 bg-[#6a9ae6] text-white rounded-r-full shadow-lg/50">
            <a
              className="flex justify-between items-center w-full px-5"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
