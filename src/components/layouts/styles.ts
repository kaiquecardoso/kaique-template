import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
`;

export const Sidebar = styled.aside<{ $isOpen?: boolean }>`
  width: 280px;
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
    width: 280px;
    position: fixed;
    height: 100vh;
    left: ${props => props.$isOpen ? '0' : '-280px'};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 30px;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    padding-top: 80px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid var(--sidebar-border, #333333);
  margin-bottom: 0;
  transition: all 0.3s ease;
  background: var(--sidebar-header-bg, rgba(255, 255, 255, 0.02));
`;

export const SidebarTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--sidebar-title, #ffffff);
  transition: color 0.3s ease;
  letter-spacing: -0.025em;
`;

export const UserInfo = styled.div`
  font-size: 0.875rem;
  color: var(--sidebar-user-text, #a0a0a0);
  transition: color 0.3s ease;
  
  div {
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--sidebar-user-name, #d0d0d0);
  }
  
  small {
    color: var(--sidebar-user-email, #808080);
    font-size: 0.75rem;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  color: var(--sidebar-nav-text, #b0b0b0);
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  font-weight: 500;
  font-size: 0.95rem;
  
  &:hover {
    background: var(--sidebar-nav-hover, rgba(255, 255, 255, 0.05));
    color: var(--sidebar-nav-hover-text, #ffffff);
    border-left-color: var(--sidebar-nav-hover-border, #666666);
  }
  
  &.active {
    background: var(--sidebar-nav-active, rgba(255, 255, 255, 0.08));
    color: var(--sidebar-nav-active-text, #ffffff);
    border-left-color: var(--sidebar-nav-active-border, #888888);
  }
  
  span {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
    color: var(--sidebar-nav-icon, #cccccc);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ThemeToggleContainer = styled.div`
  margin-top: auto;
  padding: 24px 20px;
  border-top: 1px solid var(--sidebar-border, #333333);
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  background: var(--sidebar-toggle-bg, rgba(255, 255, 255, 0.02));
  
  /* Ajusta o espaçamento para o novo toggle horizontal */
  min-height: 120px;
`;

export const NavSection = styled.div`
  margin: 16px 0;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

export const NavSectionTitle = styled.div`
  padding: 0 20px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--sidebar-section-title, #808080);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
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
  background: var(--sidebar-bg, #1a1a1a);
  border-bottom: 1px solid var(--sidebar-border, #333333);
  z-index: 1000;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
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
