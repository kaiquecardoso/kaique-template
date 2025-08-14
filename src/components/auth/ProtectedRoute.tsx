import React from 'react';
import { useAuth } from '../../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Tela de carregamento enquanto verifica autenticação
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <div>Carregando...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Usuário não autenticado - será redirecionado automaticamente pelo hook
    return null;
  }

  // Usuário autenticado - renderiza o conteúdo
  return <>{children}</>;
};

export default ProtectedRoute;
