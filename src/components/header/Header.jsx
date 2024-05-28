import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../../styles/Header.css'

const Header = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow p-3 mb-  rounded">
        <div className="container-fluid">
          <NavLink>
            <img src={logo} alt=" logo" width="100px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-lg-0 nav_ul">
            <li className="nav-item">
              <NavLink
                className="nav-link  mx-4 "
                aria-current="page"
                to="/Home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/Products">
                Product list
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mx-4 " to="/contact">
                Contact Us
              </NavLink>
            </li>
            </ul>
            <form className="d-flex me-5 ">
              <NavLink to='/search'><FontAwesomeIcon icon={faSearch} className="mx-3 fs-4 my-2" /></NavLink>
              <NavLink to="/cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} className="fs-4 mx-3" /></NavLink>
            </form>
          </div>
        </div>
      </nav>
  
  );
};

export default Header;
