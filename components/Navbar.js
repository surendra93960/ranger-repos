import React from 'react';
import { NavLink } from 'react-router-dom';

export default ()=>{

    return(

          <nav className="navbar-expand-lg navbar navbar-dark bg-primary">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/" exact activeStyle={{color : 'red' ,fontSize:20}}>Home </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={ '/'+ Math.random() } activeStyle={{color : 'red' ,fontSize:20}}>RandomParam</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeStyle={{color : 'red' ,fontSize:20}}>About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" activeStyle={{color : 'red' ,fontSize:20}}>Contact</NavLink>
                  </li>
                  
                </ul>
              </div>
           </nav>


    )

}