import React from 'react'
import './contact.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'
const Contact = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section className='contact'>

      <h6 style={{ color: mode === "light" ? "#000" : "white"}}>CONTACT</h6>
      <h4 style={{ color: mode === "light" ? "#000" : "white"}}>Get in Touch</h4>
      <img src={mode === "light" ? "Images/avatar.jpg" : "Images/about2.jpg"} alt="" />
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button style={{ backgroundColor: mode === "light" ? "black" : "white" , color: mode === "light" ? "white" : "black"}}>Send Message</button>
      </form>
    </section>
  )
}

export default Contact
