import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '/src/assets/components/logo.jpg';

function Port() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
          
            
            <h1 className="hidden md:block text-black text-4xl font-bold "
                >Sneaker <span className="text-yellow-700 rounded-xl">.</span></h1>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/hj"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/fg"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/ww"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Pages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/aa"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/hh"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Elements
              </NavLink>
            </li>
            
            
          </ul>

          <ul className="sjj">
          <li className="nav-item">
              <NavLink
                
                to="/cc"
                activeClassName="active"
                className="ssj "
                onClick={handleClick}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/ii"
                activeClassName="active"
                className="ssj "
                onClick={handleClick}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="7" r="3"/></g></svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/uu"
                activeClassName="active"
                className="ssj "
                onClick={handleClick}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/></svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/oo"
                activeClassName="active"
                className="ssj "
                onClick={handleClick}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 5.5a4.5 4.5 0 0 1 9 0V7H21v16H3V7h4.5zm0 3.5H5v12h14V9h-2.5v3h-2V9h-5v3h-2zm7-2V5.5a2.5 2.5 0 0 0-5 0V7z"/></svg>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            

            {click ? (
              <span className="icon text-4xl text-black ">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg> {" "}
              </span>
            ) : (
              <span className="icon text-4xl text-black">
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75" clip-rule="evenodd"/></svg>
             
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Port;