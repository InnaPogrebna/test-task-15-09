/* eslint-disable no-console */
import React, { useState } from 'react';
import logo from '../img/logo.png';

export const Header: React.FC = () => {
  const [hide, setHide] = useState(true);

  const showNavBar = () => {
    setHide(!hide);
  };

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} className="header__logo-img" alt="logo" />
      </a>
      <nav
        className={`navigation ${hide ? 'navigation__responsive-hide' : 'navigation__responsive'}`}
      >
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a href="/">
              <span>What we do</span>
            </a>
          </li>
          <li className="navigation__list-item">
            <a href="/">
              <span>Our work</span>
            </a>
          </li>
          <li className="navigation__list-item">
            <a href="/">
              <span>Seo insights</span>
            </a>
          </li>
          <li className="navigation__list-item">
            <a href="/">
              <span>About us</span>
            </a>
          </li>
        </ul>
        <input
          type="button"
          // className="navigation__button-close"
          className={!hide ? 'navigation__button-close' : ' '}
          onClick={showNavBar}
        />
      </nav>
      <input type="button" className="navigation__button" onClick={showNavBar} />
    </header>
  );
};
