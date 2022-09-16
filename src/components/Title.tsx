import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Title: React.FC = () => {
  const title = useRef() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    gsap.fromTo(
      title.current,
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.4,
      },
    );
  });

  return (
    <section className="title">
      <h1 ref={title} className="title__text">
        Cracking the Government
        Procurement Code
      </h1>
    </section>
  );
};
