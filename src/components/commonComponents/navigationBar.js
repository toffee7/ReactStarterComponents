import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse navbar-spacing">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dataflow">Data Flow</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tanushree">Message</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Components
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/chart">Chart</Link>
                <Link className="dropdown-item" to="/table">Table</Link>
                <Link className="dropdown-item" to="/tile">Tiles</Link>
                <Link className="dropdown-item" to="/tabbedpane">Pane</Link>
                <Link className="dropdown-item" to="/form">Form</Link>
                <a className="dropdown-item" data-toggle="modal" data-target="#myModal">Modal</a>
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