import React from 'react';
import logo from 'img/logo.png';
import { Navigation } from './Navigation';
import { DropDownNavigation } from './DropDownNavigation';

export const Header: React.FC = () => {
  const screenWidth = window.innerWidth;

  return (
    <div className="header">
      <a href="/" className="header__logo">
        <img src={logo} className="header__logo-img" alt="logo" />
      </a>
      {screenWidth <= 640 ? <DropDownNavigation /> : <Navigation /> }
    </div>
  );
};
