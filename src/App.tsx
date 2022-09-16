import React from 'react';
import {
  Route, Routes, Link,
} from 'react-router-dom';
import './App.scss';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

export const App: React.FC = () => {
  return (
    <div className="page">
      <nav className="navbar">
        {/* <Link className="navbar-item" to="/home">
          Back
        </Link> */}
        <Link className="navbar-item" to="/page1">
          Page1
        </Link>
        <Link className="navbar-item" to="/page2">
          Page2
        </Link>
      </nav>
      <Routes>
        <Route path="page2" element={<Page2 />} />
        <Route path="page1" element={<Page1 />} />
      </Routes>
    </div>
  );
};
