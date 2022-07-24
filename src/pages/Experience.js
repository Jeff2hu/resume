import React from 'react'

const Experience = () => {
  return (
    <div className='experiences'>
      <div className="container">
        <div className="experiences-2017">
          <div className="experiences-2017__year">
            <h3>2017</h3>
            <p>3months</p>
          </div>
          <div className="experiences-2017__chart">
            <div className="experiences-2017__chart__circle"></div>
          </div>
          <div className="experiences-2017__work">
            <h3>Coffee Shop</h3>
            <p>當時覺得拉花的圖案很衝擊我的視覺,似乎也開啟了我對於美的探索.</p>
          </div>
        </div>
        <div className="experiences-2018">
          <div className="experiences-2018__year">
            <h3>2018~2019</h3>
            <p>1years 9months</p>
          </div>
          <div className="experiences-2018__chart">
            <div className="experiences-2018__chart__circle"></div>
          </div>
          <div className="experiences-2018__work">
            <h3>Coffee Shop</h3>
            <p>這份工作算是最接近full-time的工作,在這裡學習了許多安排店裡的事,也學了許多與同事與客人相處的訣竅.</p>
          </div>
        </div>
        <div className="experiences-2019">
          <div className="experiences-2019__year">
            <h3>2019~now</h3>
            <p>nearly 3 years</p>
          </div>
          <div className="experiences-2019__chart">
            <div className="experiences-2019__chart__circle"></div>
          </div>
          <div className="experiences-2019__work">
            <h3>Bakery</h3>
            <p>在這邊也學到了許多處理事情的態度跟方法,後來在畢業前也因為店裡有新業務,接觸了有關電商的事務,也在畢業前修了一堂Js的課程,因而開啟了自學前端的道路.</p>
          </div>
        </div>
        <div className="experiences-now">
          <div className="experiences-now__year">
            <h3>Now</h3>
            <p>Searching</p>
          </div>
          <div className="experiences-now__chart">
            <div className="experiences-now__chart__circle"></div>
          </div>
          <div className="experiences-now__work">
            <h3>Searching</h3>
            <p>Still improve myself !</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience