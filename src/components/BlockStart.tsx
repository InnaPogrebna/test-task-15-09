import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const BlockStart: React.FC = () => {
  const text = useRef() as React.MutableRefObject<HTMLElement>;
  const button = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    gsap.from(text.current, {
      yPercent: 70,
      opacity: 0,
      duration: 0.5,
      delay: 2.3,
    });
    gsap.from(button.current, {
      yPercent: 70,
      opacity: 0,
      duration: 0.5,
      delay: 2.7,
    });
  }, []);

  return (
    <section className="start">
      <div className="start__wrapper">
        <div className="start__content">
          <h1 className="start__content-title">Workforce Survey</h1>
          <article ref={text} className="start__content-article">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
          </article>
          <button type="button" ref={button} className="start__content-button">
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};
