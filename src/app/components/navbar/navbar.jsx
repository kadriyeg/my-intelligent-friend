import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <>
      <div className="container navbar-section">
        <div className="row">
          <div className="col-md-1 d-flex align-items-center">
            <img  className='logo-box' src="../../assets/logo.png" alt="logo img"/>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <div className='row'>
              <div className="logo">Zeki Yol</div>
              <div className="logo">Arkadaşım</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
                <ul className="navbar-right">
                  <li className='navbar-item'>
                    <a href="/">Ana Sayfa</a>
                  </li>
                  <li className='navbar-item'>
                    <a href="/about">Hakkımızda</a>
                  </li>
                  <li className='navbar-item'>
                    <a href="/contact">Zeki Yol Arkadaşım</a>
                  </li>
                  <li className='navbar-item'>
                    <a href="/contact">İletişime Geçin</a>
                  </li>
                  <li className='navbar-item-giris'>
                    <a href="/contact">Kayıt ol / Giriş yap</a>
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
