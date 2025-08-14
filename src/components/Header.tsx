import { Link } from '@tanstack/react-router';
import { useThemeColors } from '../hooks/useThemeColors';

export default function Header() {
  const { colors } = useThemeColors();

  return (
    <header 
      className="p-4 flex gap-4 bg-card text-primary border-b border-primary shadow-theme-sm transition-all duration-300"
      style={{
        backgroundColor: colors.background.card,
        color: colors.text.primary,
        borderColor: colors.border.primary,
      }}
    >
      <nav className="flex flex-row items-center gap-4">
        <div className="px-2 font-bold">
          <Link 
            to="/" 
            className="hover:text-primary-600 transition-colors duration-200"
            style={{ '--tw-text-opacity': '1', color: colors.primary[600] } as any}
          >
            Home
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link 
            to="/demo/form/simple"
            className="hover:text-primary-600 transition-colors duration-200"
            style={{ '--tw-text-opacity': '1', color: colors.primary[600] } as any}
          >
            Simple Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link 
            to="/demo/form/address"
            className="hover:text-primary-600 transition-colors duration-200"
            style={{ '--tw-text-opacity': '1', color: colors.primary[600] } as any}
          >
            Address Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link 
            to="/demo/table"
            className="hover:text-primary-600 transition-colors duration-200"
            style={{ '--tw-text-opacity': '1', color: colors.primary[600] } as any}
          >
            TanStack Table
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link 
            to="/demo/tanstack-query"
            className="hover:text-primary-600 transition-colors duration-200"
            style={{ '--tw-text-opacity': '1', color: colors.primary[600] } as any}
          >
            TanStack Query
          </Link>
        </div>
      </nav>
    </header>
  );
}
