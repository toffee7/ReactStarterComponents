import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse navbar-spacing">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">NavBar</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle-hover" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                Components
              
              <div className="dropdown-menu-items" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" >Chart</a>
                <a className="dropdown-item" >Table</a>               
                
              </div>
            </div>
            </li>
          </ul>

          <div className="offset-md-8 form-inline float-right">
              <button className="btn btn-sm btn-outline-success" type="submit">Username</button>
          </div>
        </div>
</nav>
    );
};

export default NavigationBar;