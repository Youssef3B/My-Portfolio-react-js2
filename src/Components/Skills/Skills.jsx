import React from 'react'
import './skills.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

const languages = [
  {language: "HTML", Percentage: "90%", id: "html-bar"},
  {language: "CSS", Percentage: "80%", id: "css-bar"},
  {language: "Javascript", Percentage: "60%", id: "javascript-bar"},
  {language: "Bootstrap", Percentage: "72%", id: "bootstrap-bar"},
  {language: "Tailwind css", Percentage: "60%", id: "tailwind-bar"},
  {language: "Sass", Percentage: "80%", id: "sass-bar"},
  {language: "jQuery", Percentage: "50%", id: "jQuery-bar"},
  {language: "React Js", Percentage: "30%", id: "React-bar"},
]

const Skills = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <section className='skills'>
      <div  class="wrapper">
        <div style={{ backgroundColor: mode === "light" ? "white" : "black" , color: mode === "light" ? "black" : "white"}} class="container">
             <h2>My SKILLS </h2>
             <h4>Front-End-Web</h4>
             {languages.map(l => 
             <div class="skills">
              <div class="details">
               <span>{l.language}</span>
                <span>{l.Percentage}</span>
               </div>
               <div class="bar">
                <div style={{ backgroundColor: mode === "light" ? "black" : "white" , color: mode === "light" ? "black" : "white"}} id={l.id}></div>
                </div>
               </div>
             )}
  
         </div>
      </div>
    </section>
  )
}

export default Skills

