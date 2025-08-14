import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        // Aqui você pode adicionar validação adicional do token
        // Por exemplo, verificar se não expirou
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        // Se não estiver autenticado e estiver em uma rota protegida, redirecionar
        if (window.location.pathname.startsWith('/auth')) {
          navigate({ to: '/' });
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const login = (token: string, userData: any) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Limpar dados de autenticação
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuthenticated');
    sessionStorage.clear();
    
    setIsAuthenticated(false);
    
    // Redirecionar para landing page
    navigate({ to: '/' });
    
    // Impedir retorno com botão voltar
    window.history.pushState(null, '', '/');
    window.history.pushState(null, '', '/');
    window.history.forward();
    
    // Forçar reload para limpar estado
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout
  };
};
