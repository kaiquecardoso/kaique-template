import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from '@emotion/styled';

const ToggleContainer = styled.div<{ $theme: string }>`
  display: flex;
  border-radius: 0.5rem;
  padding: 0.25rem;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-primary);
`;

const ToggleButton = styled(motion.button)<{ $isActive: boolean; $theme: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  
  ${props => props.$isActive ? `
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-md);
  ` : `
    background: transparent;
    color: var(--color-text-tertiary);
    
    &:hover {
      background: var(--color-bg-secondary);
      color: var(--color-text-secondary);
    }
  `}
`;

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <ToggleContainer $theme={theme}>
        <ToggleButton
          $isActive={theme === 'light'}
          $theme={theme}
          onClick={() => setTheme('light')}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FiSun style={{ width: '1rem', height: '1rem' }} />
          <span>Light</span>
        </ToggleButton>
        
        <ToggleButton
          $isActive={theme === 'dark'}
          $theme={theme}
          onClick={() => setTheme('dark')}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FiMoon style={{ width: '1rem', height: '1rem' }} />
          <span>Dark</span>
        </ToggleButton>
      </ToggleContainer>
    </div>
  );
};
