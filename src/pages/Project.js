import React from 'react';

const Project = () => {
  return (
    <div className="projects">
      <div className="container">
        <ul className='projects-project'>
          <h3> - Projects - </h3>
          <li>
            <a href="https://jeff2hu.github.io/web-photo">Searching :</a>
            <span>Use Pexels api to search the photo (React)</span>
          </li>
          <li>
            <a href="https://jeff2hu.github.io/todolist/">Todo-List(Login):</a>
            <span>Use React & React-Bootstrap  (React/Bootstrap)</span>
          </li>
          <li>
            <a href="https://jeff2hu.github.io/Hamburger-RWD-/">Hamburger-Restaurant : </a>
            <span>Use the Html/Css to layout (Rwd/Html/Css)</span>
          </li>
        </ul>
        <ul className='projects-practice'>
          <h3> - Practices - </h3>
          <li>
            <a href="https://jeff2hu.github.io/taiwan-weather/">Taiwan-weather-map:</a>
            <span>Use CWB api to check the weather (Rwd/React)</span>
          </li>
          <li>
            <a href="https://jeff2hu.github.io/morseCode/">MorseCode-transition:</a>
            <span>Use Javascript to translate and sound (React)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project