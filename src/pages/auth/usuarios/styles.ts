import styled from '@emotion/styled';

export const UsuariosContainer = styled.div`
  h1 {
    color: #2c3e50;
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const AddUserButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #229954;
    transform: translateY(-2px);
  }
`;

export const SearchBar = styled.div`
  margin-bottom: 25px;
  
  input {
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #3498db;
    }
    
    &::placeholder {
      color: #999;
    }
  }
`;

export const UserTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  background: #f8f9fa;
  padding: 16px 20px;
  font-weight: 600;
  color: #495057;
  border-bottom: 1px solid #e9ecef;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  padding: 16px 20px;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ActionButton = styled.button<{ variant: 'edit' | 'delete' }>`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px;
  
  background: ${props => props.variant === 'edit' ? '#3498db' : '#e74c3c'};
  color: white;
  
  &:hover {
    background: ${props => props.variant === 'edit' ? '#2980b9' : '#c0392b'};
    transform: translateY(-1px);
  }
`;
