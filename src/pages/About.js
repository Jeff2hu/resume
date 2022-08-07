import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about-myself">
          <h2>- Self Introduction -</h2>
          <p>我是朱博宇，24歲，畢業於德明科大應外系。在畢業前接觸了Js的課程而開啟了自學前端的道路，雖然非本科生，有許多底層的知識和開發的能力都有著差距，但也因這些差距推動著我不斷地增進自己和成長。</p>
        </div>
        <div className="about-school">
          <h2>- Education -</h2>
          <p>德明科技應用大學 : 應用外語系 <span>(畢業:2022/06)</span></p>
          <p>海大附中 : 資訊科 <span>(畢業:2016/06)</span></p>
        </div>
        <div className="about-language">
          <h2>- Language -</h2>
          <p>中文 : <span> 母語者 </span></p>
          <p>台語 : <span> 聽說尚可 </span></p>
          <p>英語 : <span> 聽說尚可 </span></p>
        </div>
        <div className="about-skill">
          <h2>- Skill -</h2>
          <p>HTML/CSS : <span> Scss / Bootstrap </span></p>
          <p>JavaScript : <span> React(function component) </span></p>
        </div>
        <div className="about-interesting">
          <h2>- Interesting -</h2>
          <ul>
            <li>跳舞</li>
            <li>足球</li>
            <li>音樂</li>
            <li>觀察時事</li>
            <li>吃</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About