import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

const projects = [
  { image: "images/1.jpg", type: "Web site", title: "ecommerce web site", languages: ["Html","Sass","Bootstrap"], description : "test", link: "https://youssef3b.github.io/web-site-store/"},
  { image: "images/2.jpg", type: "Web site", title: "Photfolio" , languages: ["Html","Sass","Bootstrap"], description : "test", link: "https://youssef3b.github.io/My-first-boostrap-web-site/"},
  { image: "images/3.jpg", type: "Web site", title: "Trello" , languages: ["Html","Css"],                 description : "test", link: "https://youssef3b.github.io/Trello-Responsive/"},
  { image: "images/4.jpg", type: "Web site", title: "Event part" , languages: ["Html","Css"],             description : "test", link: "https://youssef3b.github.io/My-First-Responsive-web-site/"},
  { image: "images/5.jpg", type: "app Web", title: "To Do list" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/Task-Project/"},
  { image: "images/6.jpg", type: "app web", title: "calculator" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/Calculator/"},
  { image: "images/7.jpg", type: "app web", title: "timer hit" , languages: ["Html","css","JavaScript"],  description : "test", link: "https://youssef3b.github.io/HIIT-Timer/"},
  { image: "images/8.jpg", type: "app web", title: "get a joke" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/Random-Joke/"},
  { image: "images/9.jpg", type: "app web", title: "game divinite" , languages: ["Html","css","JavaScript"],description : "test", link: "https://youssef3b.github.io/devinette/"},
  { image: "images/10.jpg", type: "app web", title: "github finder" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/githubfinder/"},
  { image: "images/11.jpg", type: "app web", title: "Get a meme" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/Memes-app/"},
  { image: "images/12.jpg", type: "app web", title: "Find a country" , languages: ["Html","css","JavaScript"], link: "https://youssef3b.github.io/COUNTRY/"},
  { image: "images/13.jpg", type: "app web", title: "cruds" , languages: ["Html","css","JavaScript"], description : "test", link: "https://youssef3b.github.io/CRUDS-project/"},
]

const Portfolio = () => {
  const { mode } = useContext(ThemeContext);
  const [filterProjects, setFilterProjects] = useState(projects);
  const filter = (key) => {
    if(key === "all") {
      setFilterProjects(projects);
    } else {
      setFilterProjects(projects.filter(project => project.type === key))
    }
  }
  return (
   <section className='portfolio'>
    <h2 style={{ color: mode === "light" ? "#000" : "white"}}>MY WORK</h2>
    <ul>
      <li style={{ color: mode === "light" ? "#000" : "white"}} onClick={() => filter('all')}>ALL</li>
      <li style={{ color: mode === "light" ? "#000" : "white"}} onClick={() => filter('Web site')}>Responsive Design</li>
      <li style={{ color: mode === "light" ? "#000" : "white"}} onClick={() => filter('app web')}>App Web</li>
      <li style={{ color: mode === "light" ? "#000" : "white"}} onClick={() => filter('all')}>Full Web Site</li>
    </ul>
    {filterProjects.map(project => <div style={{ backgroundColor: mode === "light" ? "white" : "black" , color: mode === "light" ? "black" : "white"}} className='card-portfolio'>
      <div>
         <img src={project.image} alt="" />
      </div>
      <div className='card-portfolio-right'>
        <h4>{project.title}</h4>
        <p>{project.type}</p>
        <h6>USED STACK :</h6>
        <div>
          <ul>
          {project.languages.map(lang => <li>{lang}</li>)}

          </ul>
        </div>
        <a style={{ color: mode === "light" ? "#000" : "white"}} className='view-theproject' href={project.link} target='blank'>View the Project</a>
      </div>
      

    </div>)}
    

   </section>
  )
}

export default Portfolio
