import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <>
      <div className="container navbar-section">
        <div className="row">
          <div className="col-md-1">
            <img src="../../assets/logo.png" alt="logo img"/>
          </div>
          <div className="col-md-4">
            <div className="logo">Zeki Yol</div>
            <div className="logo">Arkadaşım</div>
          </div>
          <div className="col-md-7">
              <ul className="navbar-right">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
