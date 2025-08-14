import React from 'react';
import { Outlet } from '@tanstack/react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
