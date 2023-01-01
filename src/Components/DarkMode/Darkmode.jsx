import React from 'react'
import { MdDarkMode } from 'react-icons/md';
import './Darkmode.css'

import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';
const Darkmode = () => {
  const { setMode } = useContext(ThemeContext)
  return (
    <div className='bg-icone-darkmode' onClick={() => {
      setMode(mode => mode === "light" ? "dark" : "light")
    }} >
        <MdDarkMode id='icone-darkmode'/>
    </div>
  )
}

export default Darkmode