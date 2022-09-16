import React, { useState } from 'react';
import '../App.scss';
import { Post } from '../types/post';
import data from '../local-json/data.json';
import { Header } from '../components/Header';
import { BlockStart } from '../components/BlockStart';
import { Posts } from '../components/Posts';
import { Footer } from '../components/Footer';

export const Page1: React.FC = () => {
  const [posts] = useState<Post[]>(data);

  return (
    <div className="page">
      <section className="header__block container">
        <Header />
        <BlockStart />
      </section>
      <section className="posts container posts__wrapper">
        <Posts posts={posts} />
      </section>
      <section className="footer container">
        <Footer />
      </section>
    </div>
  );
};
