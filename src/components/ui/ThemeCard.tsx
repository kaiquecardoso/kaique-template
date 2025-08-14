import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ThemeCardProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'accent';
  children?: React.ReactNode;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ 
  title, 
  description, 
  variant = 'primary',
  children 
}) => {
  const { colors, isDark } = useThemeColors();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.background.card,
          borderColor: colors.border.accent,
          color: colors.text.primary,
        };
      case 'secondary':
        return {
          backgroundColor: colors.background.secondary,
          borderColor: colors.border.secondary,
          color: colors.text.secondary,
        };
      case 'accent':
        return {
          backgroundColor: colors.primary[50],
          borderColor: colors.primary[200],
          color: colors.primary[900],
        };
      default:
        return {
          backgroundColor: colors.background.card,
          borderColor: colors.border.primary,
          color: colors.text.primary,
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className="rounded-lg border-2 p-6 shadow-theme-md transition-all duration-300 hover:shadow-theme-lg"
      style={styles}
    >
      <div className="mb-4">
        <h3 
          className="text-xl font-bold mb-2"
          style={{ color: variant === 'accent' ? colors.primary[900] : colors.text.primary }}
        >
          {title}
        </h3>
        <p 
          className="text-sm opacity-80"
          style={{ color: variant === 'accent' ? colors.primary[700] : colors.text.secondary }}
        >
          {description}
        </p>
      </div>
      
      {children && (
        <div className="mt-4 pt-4 border-t"
          style={{ borderColor: variant === 'accent' ? colors.primary[200] : colors.border.primary }}
        >
          {children}
        </div>
      )}
      
      <div className="mt-4 text-xs opacity-60"
        style={{ color: variant === 'accent' ? colors.primary[600] : colors.text.tertiary }}
      >
        Tema atual: {isDark ? '🌙 Escuro' : '☀️ Claro'}
      </div>
    </div>
  );
};
