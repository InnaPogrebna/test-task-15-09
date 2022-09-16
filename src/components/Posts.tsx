/* eslint-disable no-console */
import React, { useState } from 'react';
import { Post } from '../types/post';

type Props = {
  posts: Post[];
};

export const Posts: React.FC<Props> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(0);

  const getOpenPost = (post:number) => {
    if (selectedPost === post) {
      setSelectedPost(0);
    } else {
      setSelectedPost(post);
    }
  };

  return (
    <ul className="posts__list">
      {posts.map((post) => (
        <li
          key={post.id}
          className={`posts__list-item
              ${
        selectedPost === post.id
          ? 'posts__list-item--open'
          : 'posts__list-item--close'
        }`}
        >
          <img src={post.img} className="posts__list-item-img" alt={post.title} />
          <h2 className="posts__list-item-title">{post.title}</h2>
          <p
            className={`posts__list-item-text ${
              selectedPost === post.id
                ? 'posts__list-item-text--open'
                : ''
            }`}
          >
            {post.body}
          </p>
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
        </li>
      ))}
    </ul>
  );
};
