import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 280px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 20px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  
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
  background: #f8f9fa;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ecf0f1;
`;

export const UserInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  
  div {
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  small {
    opacity: 0.7;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ecf0f1;
    border-left-color: #3498db;
  }
  
  span {
    font-size: 1.2rem;
  }
`;
