import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import Logo from '../../assets/Logo.jpg'
const Navbar = () => {

  // Main menu items
  const links = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/skills", label: "My Skills" },

    { 
      label: "Service",
      submenu: [
        { path: "/youtube", label: "YouTube SEO" },
        { path: "/website", label: "Website SEO" },
        { path: "/facebook", label: "Facebook Ads" },
        { path: "/google", label: "Google Ads" },
        { path: "/shopify", label: "Shopify Ads" },
        { path: "/socialMediaManage", label: "Social Media Management" },
      ]
    },

    {
      label: "Client",
      submenu: [
        { path: "/meeting", label: "Client Meeting" },
        { path: "/review", label: "Client Review" }
      ]
    },
    


    
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const baseStyle = "px-3 py-2 rounded";
  const activeStyle = "activeColor text-white";
  const hoverStyle = "hover-activeColor";

  return (
    <nav className="navbar navbar-expand-lg shadow-sm py-3 sticky-top background">
      <div className="container">

        <div className="navbar-brand">
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ height: "50px", objectFit: "contain" }} 
          />
        </div>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-2">

            {links.map((link, index) =>
              link.submenu ? (
                <li key={index} className="nav-item dropdown hover-dropdown">
                  <span className="nav-link fw-bold dropdown-toggle">
                    {link.label}
                  </span>
                  <ul className="dropdown-menu hero-bg">
                    {link.submenu.map((sub, i) => (
                      <li key={i}> 
                        <NavLink className="dropdown-item" to={sub.path}>
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${baseStyle} nav-link fw-medium ${
                        isActive ? activeStyle : hoverStyle
                      } fw-bold`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}

          </ul>

          <div className="d-flex gap-3 fs-5">
            <a href="https://www.facebook.com/AdulHalim.net/" className="text-dark hover-color"><FaFacebook /></a>
            <a href="https://www.instagram.com/khdreamit/" className="text-dark hover-color"><FaInstagramSquare /></a>
            <a href="https://www.linkedin.com/in/khdreamit/" className="text-dark hover-color"><FaLinkedin /></a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
