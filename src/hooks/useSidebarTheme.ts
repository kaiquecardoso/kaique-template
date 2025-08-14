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
      // Tema escuro - sidebar escura (padrão)
      root.style.setProperty('--sidebar-bg', '#1a1a1a');
      root.style.setProperty('--sidebar-text', '#ffffff');
      root.style.setProperty('--sidebar-border', '#333333');
      root.style.setProperty('--sidebar-header-bg', 'rgba(255, 255, 255, 0.02)');
      root.style.setProperty('--sidebar-title', '#ffffff');
      root.style.setProperty('--sidebar-user-text', '#a0a0a0');
      root.style.setProperty('--sidebar-user-name', '#d0d0d0');
      root.style.setProperty('--sidebar-user-email', '#808080');
      root.style.setProperty('--sidebar-nav-text', '#b0b0b0');
      root.style.setProperty('--sidebar-nav-hover', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--sidebar-nav-hover-text', '#ffffff');
      root.style.setProperty('--sidebar-nav-hover-border', '#666666');
      root.style.setProperty('--sidebar-nav-active', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--sidebar-nav-active-text', '#ffffff');
      root.style.setProperty('--sidebar-nav-active-border', '#888888');
      root.style.setProperty('--sidebar-nav-icon', '#cccccc');
      root.style.setProperty('--sidebar-toggle-bg', 'rgba(255, 255, 255, 0.02)');
      root.style.setProperty('--sidebar-section-title', '#808080');
    }
  }, [theme]);
};
