import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [active,setActive] = useState(0);
  const nav = [
    {class:"fa-solid fa-address-card",text:"About",to:"/"},
    {class:"fa-solid fa-briefcase",text:"Experience",to:"/experience"},
    {class:"fa-solid fa-file",text:"Project",to:"/project"},
    {class:"fa-solid fa-envelope",text:"Contact",to:"/contact"},
  ]

  return (
    <div>
      <div className='nav'>
        <ul>
          {nav.map((item,index)=>{
            const isClick = (index===active)?"active":"";
            return (
              <li key={item.text}>
                <Link 
                  to={item.to} 
                  className={isClick} 
                  onClick={()=>{ 
                    setActive(index)
                  }}>
                <i className={`${item.class}`}></i> 
                {item.text} 
                </Link>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default Nav