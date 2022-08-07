import React from 'react'

const Experience = () => {
  return (
    <div className='experiences'>
      <div className="container">
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
            <p>在這份工作裡因要處理與客人或與廠商的關係，所以在這份工作裡也可以說是接觸了不少與人相處的眉角.</p>
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
            <p>在這也學到無論是在同事間的相處亦或是和他人的關係都能處理得很好，也因為店裡有新業務接觸了新的領域,同時在畢業前修了一堂Js的課程而開啟了自學前端的道路.</p>
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