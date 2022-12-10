import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Nav.css";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "./assets/logo.png";
import { BiUser } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/">
            <img
              className="navbar-logo"
              style={{
                width: "35%",
                display: "flex",
                listStyle: "none",
                justifyContent: "space-around",
              }}
              src={logo}
              alt="Ziropa Sirup logo"
              onClick={closeMobileMenu}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Hjem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Produkter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Nyheder
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/recipe"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Inspiration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Om os
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <BiUser onClick={closeMobileMenu} />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

/* <header>
        <img className="logo" src={logo} alt="" />
      


    <nav>
  
        </div>
        
        
      </nav>
  
  
{/* <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontFamily: 'Poppins, sansserif',fontSize: '20px', backgroundColor: 'grey', padding: 2,}}> */

/*   <NavLink to="/" end>HJEM</NavLink>
      <NavLink to="/products">PRODUKTER</NavLink> 
      <NavLink to="/news">NYHEDER</NavLink>
      <NavLink to="/recipe">INSPIRATIONS</NavLink>
      <NavLink to="/about">OM OS</NavLink>
      <NavLink className="login" to="/login"> <BiUser/> </NavLink>
/*
 {/* </Box> */

/*</nav>
 </header> */

/* ---------- https://mui.com/system/properties/-------------- */
