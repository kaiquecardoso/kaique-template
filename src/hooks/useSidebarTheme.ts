import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useSidebarTheme = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'light') {
      // Tema claro - sidebar branca
      root.style.setProperty('--sidebar-bg', '#ffffff');
      root.style.setProperty('--sidebar-text', '#1a1a1a');
      root.style.setProperty('--sidebar-border', '#e5e7eb');
      root.style.setProperty('--sidebar-header-bg', 'rgba(0, 0, 0, 0.02)');
      root.style.setProperty('--sidebar-title', '#1a1a1a');
      root.style.setProperty('--sidebar-user-text', '#6b7280');
      root.style.setProperty('--sidebar-user-name', '#374151');
      root.style.setProperty('--sidebar-user-email', '#9ca3af');
      root.style.setProperty('--sidebar-nav-text', '#6b7280');
      root.style.setProperty('--sidebar-nav-hover', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--sidebar-nav-hover-text', '#1a1a1a');
      root.style.setProperty('--sidebar-nav-hover-border', '#d1d5db');
      root.style.setProperty('--sidebar-nav-active', 'rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--sidebar-nav-active-text', '#1a1a1a');
      root.style.setProperty('--sidebar-nav-active-border', '#9ca3af');
      root.style.setProperty('--sidebar-nav-icon', '#6b7280');
      root.style.setProperty('--sidebar-toggle-bg', 'rgba(0, 0, 0, 0.02)');
      root.style.setProperty('--sidebar-section-title', '#6b7280');
    } else {
      // Tema escuro - sidebar escura com cores da landing page
      root.style.setProperty('--sidebar-bg', '#000000');
      root.style.setProperty('--sidebar-text', '#ffffff');
      root.style.setProperty('--sidebar-border', '#1a1a1a');
      root.style.setProperty('--sidebar-header-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--sidebar-title', '#ffffff');
      root.style.setProperty('--sidebar-user-text', '#e0e0e0');
      root.style.setProperty('--sidebar-user-name', '#ffffff');
      root.style.setProperty('--sidebar-user-email', '#a0a0a0');
      root.style.setProperty('--sidebar-nav-text', '#e0e0e0');
      root.style.setProperty('--sidebar-nav-hover', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--sidebar-nav-hover-text', '#ffffff');
      root.style.setProperty('--sidebar-nav-hover-border', '#1a1a1a');
      root.style.setProperty('--sidebar-nav-active', 'rgba(255, 255, 255, 0.15)');
      root.style.setProperty('--sidebar-nav-active-text', '#ffffff');
      root.style.setProperty('--sidebar-nav-active-border', '#0a0a0a');
      root.style.setProperty('--sidebar-nav-icon', '#e0e0e0');
      root.style.setProperty('--sidebar-toggle-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--sidebar-section-title', '#a0a0a0');
    }
  }, [theme]);
};
