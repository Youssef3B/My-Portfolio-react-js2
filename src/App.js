import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Navbarphone from './Components/NavbarPhone/Navbarphone';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';
import Darkmode from './Components/DarkMode/Darkmode';
import Navbarup from './Components/Navbarup/Navbarup';
import ThemeContext from './Context/ThemeContext';
import { useState } from 'react';

function App() {
  const [mode, setMode ] = useState('light')
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
          <section>
      <ParticlesBackground />
      <div className='left-side' style={{ backgroundColor: mode === "light" ? "white" : "#111111"}}>
        <Navbar className='child-lef-side'/>
        
      </div>
      <div className='right-side'>
        <div className='darkicone'>
        <Darkmode/>
        </div>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
        <div className='child-left-side2'  style={{ backgroundColor: mode === "light" ? "#dedede" : "#333333"}}>
        <Navbarphone/>
        </div>
        <div className='child-up'>
          <Navbarup/>
        </div>
      </div>
    </section>
    </ThemeContext.Provider>
  );
}

export default App;
