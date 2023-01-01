import React from 'react'
import './Home.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'
import Typewriter from 'typewriter-effect';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const Home = () => {
  function opengithub() {
    window.open('https://github.com/Youssef3B');
  }
  function openfacebook() {
    window.open('https://web.facebook.com/?_rdc=1&_rdr');
  }
  function openlinkedin() {
    window.open('https://github.com/Youssef3B');
  }
  const { mode } = useContext(ThemeContext);
  return (
    <>
    <section className='hero-section'>
      
        <img src={mode === "light" ? "Images/avatar.jpg" : "Images/about2.jpg"} alt="" />
    
      
      <div style={{ color: mode === "light" ? "#000" : "white"}}>
        <h2>Hi, I'm Youssef Ababou</h2>
        <div className='text-type'>I am a<Typewriter
          options={{
            strings: ['Full Stack Developer', 'Designer'],
            autoStart: true,
            loop: true,
          }}
        /></div>
        <div className='social-media'>
           <FiGithub onClick={opengithub} className='icone-socialmedia'/>
           <FaLinkedinIn onClick={openlinkedin} className='icone-socialmedia'/>
           <FaFacebookF onClick={openfacebook} className='icone-socialmedia'/>

        </div>
       

      </div>
    </section>
    </>
    
  )
}

export default Home