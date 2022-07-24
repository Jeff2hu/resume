import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_top">
        <h1>Jeff Zhu<span>朱博宇</span></h1>
      </div>
      <div className="header_img">
        <div className="img"></div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_infro">
          <h2>Front end developer</h2>
          <h3>Taiwan ,<span>Keelung</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Header