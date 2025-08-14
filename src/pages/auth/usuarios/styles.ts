import styled from '@emotion/styled';

export const UsuariosContainer = styled.div`
  h1 {
    color: var(--color-text-primary);
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
    transition: color 0.3s ease;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const AddUserButton = styled.button`
  background: var(--color-success);
  color: var(--color-text-inverse);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const SearchBar = styled.div`
  margin-bottom: 25px;
  
  input {
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    border: 2px solid var(--color-border-primary);
    border-radius: 8px;
    font-size: 1rem;
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary-500);
      box-shadow: 0 0 0 3px var(--color-primary-100);
    }
    
    &::placeholder {
      color: var(--color-text-tertiary);
    }
  }
`;

export const UserTable = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  background: var(--color-bg-secondary);
  padding: 16px 20px;
  font-weight: 600;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border-primary);
  transition: all 0.3s ease;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-bg-tertiary);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-primary);
  transition: color 0.3s ease;
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
  
  background: ${props => props.variant === 'edit' ? 'var(--color-info)' : 'var(--color-error)'};
  color: var(--color-text-inverse);
  
  &:hover {
    background: ${props => props.variant === 'edit' ? '#2563eb' : '#dc2626'};
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }
`;
