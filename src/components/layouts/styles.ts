import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  position: relative;
  
  &[data-theme="dark"] {
    background: linear-gradient(135deg, #000000 0%, #0a0a0a 20%, #1a1a1a 40%, #0a0a0a 60%, #000000 100%);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(26, 26, 26, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }
  }
`;

export const Sidebar = styled.aside<{ $isOpen?: boolean }>`
  width: 240px;
  background: var(--sidebar-bg, #1a1a1a);
  color: var(--sidebar-text, #ffffff);
  padding: 0;
  box-shadow: var(--shadow-xl);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--sidebar-border, #333333);
  transition: all 0.3s ease;
  z-index: 1001;
  
  @media (max-width: 768px) {
    width: 240px;
    position: fixed;
    height: 100vh;
    left: ${props => props.$isOpen ? '0' : '-240px'};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: 240px;
  padding: 30px;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    padding-top: 80px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 20px 16px;
  border-bottom: 1px solid var(--sidebar-border, #333333);
  margin-bottom: 0;
  transition: all 0.3s ease;
  background: var(--sidebar-header-bg, rgba(255, 255, 255, 0.02));
`;

export const SidebarTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--sidebar-title, #ffffff);
  transition: color 0.3s ease;
  letter-spacing: -0.025em;
`;

export const UserInfo = styled.div`
  font-size: 0.8rem;
  color: var(--sidebar-user-text, #a0a0a0);
  transition: color 0.3s ease;
  
  div {
    font-weight: 500;
    margin-bottom: 2px;
    color: var(--sidebar-user-name, #d0d0d0);
  }
  
  small {
    color: var(--sidebar-user-email, #808080);
    font-size: 0.7rem;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: var(--sidebar-nav-text, #b0b0b0);
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 2px solid transparent;
  font-weight: 500;
  font-size: 0.9rem;
  
  &:hover {
    background: var(--sidebar-nav-hover, rgba(255, 255, 255, 0.05));
    color: var(--sidebar-nav-hover-text, #ffffff);
    border-left-color: var(--sidebar-nav-hover-border, #666666);
  }
  
  &.active {
    background: var(--sidebar-nav-active, rgba(255, 255, 255, 0.1));
    color: #ffffff !important;
    border-left-color: #ffffff;
    font-weight: 600;
  }
  
  span {
    font-size: 1rem;
    width: 18px;
    text-align: center;
    color: var(--sidebar-nav-icon, #cccccc);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  &.active span {
    color: #ffffff;
  }
`;

export const ThemeToggleContainer = styled.div`
  margin-top: auto;
  padding: 16px;
  border-top: 1px solid var(--sidebar-border, #333333);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  background: var(--sidebar-toggle-bg, rgba(255, 255, 255, 0.02));
  
  min-height: 120px;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  border: 1px solid var(--sidebar-border, #333333);
  border-radius: 6px;
  color: var(--sidebar-nav-text, #b0b0b0);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--sidebar-nav-hover, rgba(255, 255, 255, 0.05));
    color: var(--sidebar-nav-hover-text, #ffffff);
    border-color: var(--sidebar-nav-hover-border, #666666);
  }
  
  span {
    font-size: 0.9rem;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--sidebar-text, #ffffff);
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    background: var(--sidebar-nav-hover, rgba(255, 255, 255, 0.05));
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg-overlay);
  z-index: 999;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    display: ${props => props.className?.includes('active') ? 'block' : 'none'};
  }
`;

export const MobileHeader = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--color-bg-overlay);
  border-bottom: 1px solid var(--sidebar-border, #1a1a1a);
  z-index: 1000;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Breadcrumb = styled.div`
  color: var(--sidebar-text, #ffffff);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: capitalize;
`;
