import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div>
      <div className="container footer-section">
        <div className="row">
          <div className="col-md-3">
            <span className='footer-title'>Zeki Yol Arkadaşım</span>
            <div className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat facilis ab!</div>
          </div>
          <div className="col-md-2">
            <p className='footer-text'>Hakkımzda</p>
            <p className='footer-text'>Zeki Yol Arkadaşım nasıl çalışıyor?</p>
            <p className='footer-text'>Popüler kurslar</p>
            <p className='footer-text'>Hizmetler</p>
          </div>
          <div className="col-md-2">
            <p className='footer-text'>Kategoriler</p>
            <p className='footer-text'>Çevrimdışı Kurslar</p>
            <p className='footer-text'>Video Kurslar</p>
          </div>
          <div className="col-md-2">
            <p className='footer-text'>SSS</p>
            <p className='footer-text'>Yardım Merkezi</p>
            <p className='footer-text'>Kariyer</p>
            <p className='footer-text'>Gizlilik</p>
          </div>
          <div className="col-md-3">
            <p className='footer-text'>+0913 705 3875</p>
            <p className='footer-text'>ElizabethJ@jourrapide.com</p>
            <p className='footer-text'>4808 Skinner Hollow Road Days Creek, OR 97429</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
