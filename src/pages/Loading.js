import React from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = ({setFollow,follow}) => {

  const navigate = useNavigate();

  const setFollowHandler = () => {
    setFollow((prev)=>!prev)
  }

  return (
    <div className={`loading ${follow?"complete":""} `}>
      <div className="card">
        <div className="card-img">
          <div className="card-img__img"></div>
        </div>
        <div className="card-content">
          <div className="card-content__detail">
            <h2>Jeff Zhu<br/><span>Junior Front End Developer</span></h2>
            <div className="card-content__detail__data">
              <h3>3<br/><span>Projects</span></h3>
              <h3>4<br/><span>Practices</span></h3>
              <h3>2<br/><span>Workings</span></h3>
            </div>
            <div className="card-content__detail__btn">
              <button onClick={setFollowHandler}> Watching </button>
              <button 
                onClick={()=>{
                  navigate("/contact")
                  setFollowHandler()
                }}> Contact </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading