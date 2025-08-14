import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { LayoutContainer, Sidebar, MainContent, SidebarHeader, NavItem, SidebarTitle, UserInfo, ThemeToggleContainer, NavSection, NavSectionTitle } from './styles';
import { ThemeToggle } from '../ui/ThemeToggle';
import { 
  FiHome, 
  FiUsers, 
  FiSettings
} from 'react-icons/fi';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const authItems = [
    { label: 'Dashboard', path: '/auth/home', icon: <FiHome /> },
    { label: 'Usuários', path: '/auth/usuarios', icon: <FiUsers /> },
    { label: 'Configuração', path: '/auth/configuracao', icon: <FiSettings /> }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarHeader>
          <SidebarTitle>123done</SidebarTitle>
          <UserInfo>
            <div>👤 Usuário</div>
            <small>admin@example.com</small>
          </UserInfo>
        </SidebarHeader>
        
        <NavSection>
          <NavSectionTitle>Navegação</NavSectionTitle>
          <nav>
            {authItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <NavItem className={isActive(item.path) ? 'active' : ''}>
                  <span>{item.icon}</span>
                  {item.label}
                </NavItem>
              </Link>
            ))}
          </nav>
        </NavSection>
        
        <ThemeToggleContainer>
          <ThemeToggle />
        </ThemeToggleContainer>
      </Sidebar>
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default AuthLayout;
