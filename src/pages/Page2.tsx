import React, { useState } from 'react';
import '../App.scss';
import { Post } from '../types/post';
import data from '../local-json/data.json';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { BlockArticle } from '../components/BlockArticle';
import { Footer } from '../components/Footer';
import { PostsPage2 } from '../components/PostsPage2';

export const Page2: React.FC = () => {
  const [posts] = useState<Post[]>(data);

  return (
    <div className="page">
      <section className="header__block container">
        <Header />
        <Title />
      </section>
      <section className="posts container">
        <BlockArticle />
        <PostsPage2 posts={posts} />
      </section>
      <section className="footer container">
        <Footer />
      </section>
    </div>
  );
};
