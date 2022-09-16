import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import twitter from '../img/tw.svg';
import instagram from '../img/insta.svg';
import facebook from '../img/f.svg';

export const Footer: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      '#socials',
      {
        xPercent: -70,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        scrollTrigger: {
          trigger: '#socials',
        },
      },
    );
    gsap.fromTo(
      '#text',
      {
        xPercent: -70,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#text',
        },
      },
    );
  }, []);

  return (
    <div className="footer__wrapper">
      <p className="footer__wrapper-text" id="text">
        Ukraine 2000-2015
      </p>
      <ul className="footer__wrapper-socials" id="socials">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="footer__wrapper-socials-icon" alt="f" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="footer__wrapper-socials-icon" alt="tw" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="footer__wrapper-socials-icon" alt="insta" />
          </a>
        </li>
      </ul>
    </div>
  );
};
