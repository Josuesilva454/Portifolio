import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";


const NavBar = () => {

   const  [expandNavBar, setExpandNavbar] = useState(false);

   const location = useLocation();

   useEffect(() => {
    setExpandNavbar(false);
   }, [location]);

  return (
    <div>
        <nav className="navbar" id={expandNavBar ? "open" : "close"}>
          <div class="toggleButton">
            <button  onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
              
              <ReorderIcon /> 
            </button>
          </div>
 
            <Link to="/">Home</Link>
       
            <Link to="/projects">Projetos</Link>
       
            <Link to="/experience">Experiência</Link>
        
         
      </nav>
      
    </div>
  )
}

export default NavBar
