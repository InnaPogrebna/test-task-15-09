/* eslint-disable no-console */
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Post } from '../types/post';

type Props = {
  posts: Post[];
};

export const PostsPage2: React.FC<Props> = ({ posts }) => {
  gsap.registerPlugin(ScrollTrigger);
  const postsRef = useRef() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    gsap.fromTo(
      postsRef.current,
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: postsRef.current,
          start: 'top bottom-=50px',
        },
      },
    );
  }, []);

  return (
    <div className="posts__container" ref={postsRef}>
      <h2 className="posts__title">Related Insights</h2>
      <ul className="posts__list">
        {posts.map((post) => (
          <li key={post.id} className="posts__list-item">
            <img src={post.img} className="posts__list-item-img" alt={post.title} />
            <h2 className="posts__list-item-title">{post.title}</h2>
            <p className="posts__list-item-text">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
