// App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './profile.tsx';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
