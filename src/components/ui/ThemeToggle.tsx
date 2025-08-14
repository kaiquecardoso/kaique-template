import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Toggle horizontal com botões Light/Dark */}
      <div className={`flex rounded-lg p-1 shadow-inner ${
        theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
      }`}>
        <motion.button
          onClick={() => setTheme('light')}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            theme === 'light' 
              ? 'bg-white text-black shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-600'
          }`}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FiSun className="w-4 h-4" />
          <span>Light</span>
        </motion.button>
        
        <motion.button
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            theme === 'dark' 
              ? 'bg-black text-white shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-600'
          }`}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FiMoon className="w-4 h-4" />
          <span>Dark</span>
        </motion.button>
      </div>
      
      {/* Label sutil */}
      <div className="text-center">
        <span className={`text-xs font-medium ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Tema do Sistema
        </span>
      </div>
    </div>
  );
};
