import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join1 = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s1ah04j', 'template_t3jnefa', form.current, 'sYyf2otz4CRmgc8G9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className='join' id='join-us'> 
      <div className="left-j">
        <hr />
        <div>
            <span>READY TO</span>
            <span className='stroke-text'> LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span  className='stroke-text'> WITH US?</span>
        </div>
        

      </div>
      <div className="right-j">
<form ref={form} action="" className="email-container" onClick={sendEmail}>
    <input type="email" name='user_email' placeholder='REneter your email address' />
    <button className='btn btn-j'>JOIN NOW</button>
</form>
      </div>
    </div>
  )
}

export default Join1
