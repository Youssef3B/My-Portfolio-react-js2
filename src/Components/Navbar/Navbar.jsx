import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css'
import { HiHome } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';
import { BsBinocularsFill } from 'react-icons/bs';
import { BsFillBagFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri';
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';



const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  function opengithub() {
    window.open('https://github.com/Youssef3B');
  }
  function openfacebook() {
    window.open('https://web.facebook.com/?_rdc=1&_rdr');
  }
  function openlinkedin() {
    window.open('https://github.com/Youssef3B');
  }
  return (
    <nav>
        <div className='avatar-nav'>
             <img src="Images/avatar.jpg" alt="" />
        </div>
        
        <ul>
            
            <li><NavLink className={({ isActive }) => isActive ? 'links-nav active' : 'links-nav'} style={{ color: mode === "light" ? "#000" : "white"}} to={"/"}><HiHome className='icones-nav'/>HOME </NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'links-nav active' : 'links-nav'} style={{ color: mode === "light" ? "#000" : "white"}} to={"/about"}><HiUser className='icones-nav'/>ABOUT </NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'links-nav active' : 'links-nav'} style={{ color: mode === "light" ? "#000" : "white"}} to={"/skills"}><BsBinocularsFill className='icones-nav'/>SKILLS </NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'links-nav active' : 'links-nav'} style={{ color: mode === "light" ? "#000" : "white"}} to={"/portfolio"}><BsFillBagFill className='icones-nav'/>PORTFOLIO </NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'links-nav active' : 'links-nav'} style={{ color: mode === "light" ? "#000" : "white"}} to={"/contact"}><RiMessageFill className='icones-nav'/>CONTACT </NavLink></li>
            <div className='copyright'>
                <p style={{ color: mode === "light" ? "#000" : "white"}}>© 2022 Youssef</p>
                <p style={{ color: mode === "light" ? "#000" : "white"}}>Created by<span className='creator'> 3b Youssef</span></p>
            </div>
            <div className='social-media'>
           <FiGithub onClick={opengithub} className='icone-socialmedia'/>
           <FaLinkedinIn onClick={openlinkedin} className='icone-socialmedia'/>
           <FaFacebookF onClick={openfacebook} className='icone-socialmedia'/>

        </div>
        </ul>
    </nav>
  )
}

export default Navbar