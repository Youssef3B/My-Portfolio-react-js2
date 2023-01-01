import React from 'react'
import './about.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'


const About = () => {
  const { mode } = useContext(ThemeContext);
  function openPDF() {
    window.open('Images/ussef-cv.pdf');
  }
  return (
    <section className='about'>
      
        <div>
          <img src={mode === "light" ? "Images/avatar.jpg" : "Images/about2.jpg"} alt="" />
        </div>
        <div className='about-down'>
          <div>
            <h4 style={{ color: mode === "light" ? "#000" : "white"}}>Youssef Ababou & Full Stack Developer</h4>
            <p style={{ color: mode === "light" ? "#000" : "white"}}>Hello there! My name is Ababou Youssef. I am a Full Stack Developer, and I’m very passionate and dedicated to my work. With 3 years experience as a professional a Developer web, I have acquired the skills and knowledge necessary to make your project a success.</p>
            <button onClick={openPDF} style={{ backgroundColor: mode === "light" ? "black" : "white" , color: mode === "light" ? "white" : "black"}}>Download cv</button>
          </div>
          <div>
            <ul>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Birthday: </span>13.06.2001</p></li>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Age: </span>21</p></li>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Address: </span>Marrakech Massira1</p></li>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Email: </span>3b.youssef@gmail.com</p></li>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Phone: </span>+2126-87-11-44-38</p></li>
              <li style={{ color: mode === "light" ? "#000" : "white"}}><p><span>Freelance: </span>Available</p></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default About
