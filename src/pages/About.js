import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about-myself">
          <h2>-Self Introduction-</h2>
          <p>我是朱博宇，24歲，畢業於德明科大應外系。在畢業前接觸了Js的課程而開啟了自學前端的道路，雖然非本科生，有許多底層的知識和開發的能力都有著差距，但也因這些差距推動著我不斷地增進自己和成長。</p>
        </div>
        <div className="about-school">
          <h2>-Education-</h2>
          <p>德明科技應用大學 : 應用外語系</p>
        </div>
        <div className="about-skill">
          <h2>-Skill-</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>SCSS</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About