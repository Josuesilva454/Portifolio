import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <LinkedIn/>
            <GitHub/>

             </div>
        <p> &copy josuerosasilva49@gmail.com</p>
      
    </div>
  )
}

export default Footer
