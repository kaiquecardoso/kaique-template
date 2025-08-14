import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
`;

export const Sidebar = styled.aside`
  width: 280px;
  background: #1a1a1a;
  color: #ffffff;
  padding: 0;
  box-shadow: var(--shadow-xl);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #333333;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    height: auto;
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
  }
`;

export const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #333333;
  margin-bottom: 0;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
`;

export const SidebarTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
  transition: color 0.3s ease;
  letter-spacing: -0.025em;
`;

export const UserInfo = styled.div`
  font-size: 0.875rem;
  color: #a0a0a0;
  transition: color 0.3s ease;
  
  div {
    font-weight: 500;
    margin-bottom: 4px;
    color: #d0d0d0;
  }
  
  small {
    color: #808080;
    font-size: 0.75rem;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  font-weight: 500;
  font-size: 0.95rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    border-left-color: #666666;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border-left-color: #888888;
  }
  
  span {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
    color: #cccccc;
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
  border-top: 1px solid #333333;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
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
  color: #808080;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`;
