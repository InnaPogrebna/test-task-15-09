/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

export const DropDownNavigation: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="dropdown">
      <section className="dropdown__content" onClick={toggleShow}>
        {show && (
          <div className="dropdown__popover">
            <ul className="dropdown__list">
              <li className="dropdown__list-item">
                <a href="/">
                  <span>What we do</span>
                </a>
              </li>
              <li className="dropdown__list-item">
                <a href="/">
                  <span>Our work</span>
                </a>
              </li>
              <li className="dropdown__list-item">
                <a href="/">
                  <span>Seo insights</span>
                </a>
              </li>
              <li className="dropdown__list-item">
                <a href="/">
                  <span>About us</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};
