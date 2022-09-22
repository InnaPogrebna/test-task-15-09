import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

export const App: React.FC = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/test-task-15-09/" element={<HomePage />} />
        <Route path="/test-task-15-09/page1" element={<Page2 />} />
        <Route path="/test-task-15-09/page2" element={<Page1 />} />
        <Route path="*" element={<p>ERROR</p>} />
      </Routes>
    </div>
  );
};
