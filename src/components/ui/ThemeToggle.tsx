import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.button
        onClick={toggleTheme}
        className="relative inline-flex h-8 w-14 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
        style={{
          backgroundColor: theme === 'light' ? '#e5e7eb' : '#374151'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        <span className="sr-only">
          {theme === 'light' ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
        </span>
        
        {/* Indicador deslizante com Motion */}
        <motion.div 
          className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
          animate={{
            x: theme === 'dark' ? 28 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </motion.button>
      
      {/* Label sutil */}
      <div className="text-center">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}
        </span>
      </div>
    </div>
  );
};
