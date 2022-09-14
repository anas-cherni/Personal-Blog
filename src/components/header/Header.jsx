import React from 'react'
import "./header.css"
import { useState } from 'react';
const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#About");
  return (
    <div>
      <header className="header">
          <nav className="nav  container">
             <a href="index.html" className="nav__logo">./n0s</a>

             <div className={Toggle? "nav__menu show-menu" : "nav__menu"}>
                 <ul className="nav__list grid">
                     <li className="nav__item">
                         <a href="#About" onClick={()=> setActiveNav("#About")}
                         className={activeNav === "#About" ? "nav_link active-link" : "nav_link"}>
                             <i className="uil uil-estate nav__icon"></i>About
                         </a>
                     </li>

                      <li className="nav__item">
                         <a href="#Skills" onClick={()=> setActiveNav("#Skills")}
                         className={activeNav === "#Skills" ? "nav_link active-link" : "nav_link"}>
                             <i className="uil uil-file nav__icon"></i>Skills
                         </a>
                     </li>

                      <li className="nav__item">
                         <a href="#Blog" onClick={()=> setActiveNav("#Blog")}
                         className={activeNav === "#Blog" ? "nav_link active-link" : "nav_link"}>
                             <i className="uil uil-briefcase-alt nav__icon"></i>Blog
                         </a>
                     </li>

                      <li className="nav__item">
                         <a href="#Contact" onClick={()=> setActiveNav("#Contact")}
                         className={activeNav === "#Contact" ? "nav_link active-link" : "nav_link"}>
                             <i className="uil uil-message nav__icon"></i>Contact
                         </a>
                     </li>
                     
                 </ul>
                 <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
             </div>

             <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                 <i className="uil uil-apps"></i>
             </div>
          </nav>
      </header>
    </div>
  )
}

export default Header
