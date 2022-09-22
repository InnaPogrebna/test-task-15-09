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
        <Link className="navbar-item" to="/test-task-15-09">
          Home
        </Link>
        <Link className="navbar-item" to="/test-task-15-09/page1">
          Page1
        </Link>
        <Link className="navbar-item" to="/test-task-15-09/page2">
          Page2
        </Link>
      </nav>
      <Routes>
        <Route path="/test-task-15-09/page1" element={<Page2 />} />
        <Route path="/test-task-15-09/page2" element={<Page1 />} />
        <Route path="*" element={<p>ERROR</p>} />
      </Routes>
    </div>
  );
};
