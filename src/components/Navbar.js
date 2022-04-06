import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/globalState';
import logo from '../images/logo2.jpg';
import './Navbar.css'

const Navbar = () => {
  const {loggedIn} = useContext(GlobalContext)


  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {!loggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!loggedIn && (
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            )}
            {loggedIn && (
              <li>
                <Link to="/dashboard">Home</Link>
              </li>
            )}
            {loggedIn && (
              <li>
                <Link to="/addtrans">Add</Link>
              </li>
            )}
            {loggedIn && (
              <li>
                <Link to="/history">History</Link>
              </li>
            )}
            {loggedIn && (
              <li>
                <Link to="/signup">Logout</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;