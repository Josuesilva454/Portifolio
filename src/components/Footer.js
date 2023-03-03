import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/josue-silva-b26a26163/', '_blank')} />
            <GitHub onClick={() => window.open('https://github.com/Josuesilva454', '_blank')}  />

             </div>
        <p> &copy josuerosasilva49@gmail.com</p>
      
    </div>
  )
}

export default Footer
