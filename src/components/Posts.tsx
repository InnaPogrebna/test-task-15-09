/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Post } from '../types/post';

type Props = {
  posts: Post[];
  openCart: boolean;
};

export const Posts: React.FC<Props> = ({ posts, openCart }) => {
  const [selectedPost, setSelectedPost] = useState(0);

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

  const getOpenPost = (post: number) => {
    if (selectedPost === post) {
      setSelectedPost(0);
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <div className="posts__container" ref={postsRef}>
      {!openCart && <h2 className="posts__title">Related Insights</h2>}
      <ul className="posts__list">
        {posts.map((post) => (
          <li
            key={post.id}
            className={`posts__list-item
              ${selectedPost === post.id ? 'posts__list-item--open' : ''}
              ${openCart ? 'posts__list-item--open' : ''}`}
          >
            <img src={post.img} className="posts__list-item-img" alt={post.title} />
            <h2 className="posts__list-item-title">{post.title}</h2>
            <p
              className={`posts__list-item-text ${
                selectedPost === post.id ? 'posts__list-item-text--open' : ''
              }`}
            >
              {post.body}
            </p>
            {openCart && (
              <button
                type="button"
                className={`posts__list-item-btn
              ${
              selectedPost === post.id
                ? 'posts__list-item-btn--open'
                : 'posts__list-item-btn--close'
              }`}
                onClick={() => getOpenPost(post.id)}
              >
                {' '}
                Show more
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
