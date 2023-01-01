import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbarphone.css'
import { HiHome } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';
import { BsBinocularsFill } from 'react-icons/bs';
import { BsFillBagFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';

// if(isActive){
//   if(mode === "light") {

//   } else {

//   }
// } else {
  
// }

const Navbarphone = () => {
  const { mode } = useContext(ThemeContext)
  return (
  <ul >
              <li><NavLink className={({ isActive }) => isActive ? (mode === "light" ? 'nav-links-phone active-phone-light' : 'nav-links-phone active-phone-dark') : 'nav-links-phone'} to={"/"}><HiHome/>HOME </NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? (mode === "light" ? 'nav-links-phone active-phone-light' : 'nav-links-phone active-phone-dark') : 'nav-links-phone'} to={"/about"}><HiUser/>ABOUT </NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? (mode === "light" ? 'nav-links-phone active-phone-light' : 'nav-links-phone active-phone-dark') : 'nav-links-phone'} to={"/skills"}><BsBinocularsFill/>SKILLS </NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? (mode === "light" ? 'nav-links-phone active-phone-light' : 'nav-links-phone active-phone-dark') : 'nav-links-phone'} to={"/portfolio"}><BsFillBagFill/>PORTFOLIO </NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? (mode === "light" ? 'nav-links-phone active-phone-light' : 'nav-links-phone active-phone-dark') : 'nav-links-phone'} to={"/contact"}><RiMessageFill/>CONTACT </NavLink></li>
            </ul>
  )
}

export default Navbarphone
