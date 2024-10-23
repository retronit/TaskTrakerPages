// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import TopBar from './components/TopBar';
import BoardPage from './pages/BoardPage';
import AssignedTasks from './pages/AssignedTasks';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Routes>
          <Route path="/board" element={<BoardPage />} />
          <Route path="/assigned" element={<AssignedTasks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
