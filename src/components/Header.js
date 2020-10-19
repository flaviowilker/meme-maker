import React from 'react';
import './../styles/Header.css';

function Header() {
    return (
      <div className="Header">
        <img
          src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
          alt='troll face'
        />
        <p>Meme Maker</p>
      </div>
    );
}

export default Header;