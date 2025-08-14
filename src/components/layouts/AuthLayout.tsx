import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { LayoutContainer, Sidebar, MainContent, SidebarHeader, NavItem, SidebarTitle, UserInfo, ThemeToggleContainer, LogoutButton, MobileToggle, Overlay, MobileHeader, Breadcrumb } from './styles';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useSidebarTheme } from '../../hooks/useSidebarTheme';
import { useAuth } from '../../hooks/useAuth';
import { 
  FiHome, 
  FiUsers, 
  FiSettings,
  FiMenu,
  FiLogOut
} from 'react-icons/fi';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();
  useSidebarTheme(); // Aplica as cores da sidebar baseadas no tema
  
  const authItems = [
    { label: 'Dashboard', path: '/auth/home', icon: <FiHome /> },
    { label: 'Usuários', path: '/auth/usuarios', icon: <FiUsers /> },
    { label: 'Configuração', path: '/auth/configuracao', icon: <FiSettings /> }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <LayoutContainer>
      {/* Header Mobile com Breadcrumb */}
      <MobileHeader>
        <MobileToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FiMenu />
        </MobileToggle>
        <Breadcrumb>
          {authItems.find(item => item.path === location.pathname)?.label || 'Página'}
        </Breadcrumb>
      </MobileHeader>

      {/* Overlay para fechar sidebar em mobile */}
      <Overlay 
        className={isSidebarOpen ? 'active' : ''} 
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar $isOpen={isSidebarOpen}>
        <SidebarHeader>
          <SidebarTitle>123done</SidebarTitle>
          <UserInfo>
            <div>👤 Usuário</div>
            <small>admin@example.com</small>
          </UserInfo>
        </SidebarHeader>
        
        <nav style={{ padding: '16px 0' }}>
          {authItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={handleNavClick}>
              <NavItem className={isActive(item.path) ? 'active' : ''}>
                <span>{item.icon}</span>
                {item.label}
              </NavItem>
            </Link>
          ))}
        </nav>
        
        <ThemeToggleContainer>
          <ThemeToggle />
          <LogoutButton onClick={handleLogout}>
            <span><FiLogOut /></span>
            Sair
          </LogoutButton>
        </ThemeToggleContainer>
      </Sidebar>

      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default AuthLayout;
