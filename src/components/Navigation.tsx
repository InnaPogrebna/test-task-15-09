import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
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
    </div>
  );
};
