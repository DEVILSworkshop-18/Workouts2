import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h1>GUVI</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">All</Link>
                </li>
                <li className="nav-item">
                  <Link to="/fsd">Full Stack Development</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ds">Data Science</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cs">Cyber Security</Link>
                </li>
                <li className="nav-item">
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
