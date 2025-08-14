import React from 'react';
import { Link } from '@tanstack/react-router';
import { LayoutContainer, Sidebar, MainContent, SidebarHeader, NavItem, SidebarTitle, UserInfo } from './styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const menuItems = [
    { label: 'Home', path: '/auth/home', icon: '🏠' },
    { label: 'Usuários', path: '/auth/usuarios', icon: '👥' },
    { label: 'Configuração', path: '/auth/configuracao', icon: '⚙️' }
  ];

  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarHeader>
          <SidebarTitle>Kaique Template</SidebarTitle>
          <UserInfo>
            <div>👤 Usuário</div>
            <small>admin@example.com</small>
          </UserInfo>
        </SidebarHeader>
        <nav>
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <NavItem>
                <span>{item.icon}</span>
                {item.label}
              </NavItem>
            </Link>
          ))}
        </nav>
      </Sidebar>
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default AuthLayout;
