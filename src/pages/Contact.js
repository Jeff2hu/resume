import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <h2>Thanks For Watching !</h2>
        <div className="contact-info">
          <p>Author:<span>Jeff Zhu</span></p>
          <p>Github:<span>Jeff2hu</span></p>
          <p>Mail:<span style={{marginLeft:"20px"}}>lovezhu661991@gmail.com</span></p>
        </div>
        <div className="contact-icons">
          <a className="contact-icons__icon icon--face fa-brands fa-facebook" href="https://www.facebook.com/profile.php?id=100002560997969"></a>
          <a className="contact-icons__icon icon--ins fa-brands fa-instagram" href="https://www.instagram.com/b_wo.ow_d/"></a>
          <a className="contact-icons__icon icon--git fa-brands fa-github" href="https://github.com/Jeff2hu"></a>
        </div>
      </div>
    </div>
  )
}

export default Contact