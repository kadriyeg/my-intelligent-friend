import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <div className="logo">Zeki Yol Arkadaşım</div>
          </div>
          <div className="col-md-8">
            <div className="navbar-right">
              <ul className='d-flex'>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
