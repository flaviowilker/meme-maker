import React from 'react';
import './../styles/Header.css';

function Header() {
    return (
      <header className="Header">
        <img
          src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
          alt='Problem?'
        />
        <p>Meme Maker</p>
      </header>
    );
}

export default Header;