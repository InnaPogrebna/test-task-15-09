import React, { useState } from 'react';
import '../App.scss';
import { Post } from '../types/post';
import data from '../local-json/data.json';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { BlockArticle } from '../components/BlockArticle';
import { Footer } from '../components/Footer';
import { Posts } from '../components/Posts';
import { HomePage } from './HomePage';

export const Page2: React.FC = () => {
  const [posts] = useState<Post[]>(data);

  return (
    <div className="page">
      <HomePage />
      <section className="header__block container">
        <Header />
        <Title />
      </section>
      <section className="posts container">
        <BlockArticle />
        <Posts posts={posts} openCart={false} />
      </section>
      <section className="footer container">
        <Footer />
      </section>
    </div>
  );
};
