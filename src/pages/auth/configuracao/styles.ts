import styled from '@emotion/styled';

export const ConfigContainer = styled.div`
  h1 {
    color: var(--color-text-primary);
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
    transition: color 0.3s ease;
  }
  
  h2 {
    color: var(--color-text-secondary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SaveButton = styled.button`
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

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

export const ConfigSection = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;

export const ConfigCard = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  padding: 25px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
`;

export const ConfigForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border-primary);
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.label`
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid var(--color-border-primary);
  border-radius: 6px;
  font-size: 0.9rem;
  width: 200px;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 2px solid var(--color-border-primary);
  border-radius: 6px;
  font-size: 0.9rem;
  width: 200px;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }
`;

export const Switch = styled.input`
  appearance: none;
  width: 50px;
  height: 26px;
  background: var(--color-border-secondary);
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:checked {
    background: var(--color-success);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: var(--color-text-inverse);
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease;
  }
  
  &:checked::before {
    transform: translateX(24px);
  }
`;

export const ThemeDemoSection = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  h2 {
    color: var(--color-text-primary);
    margin-bottom: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  p {
    color: var(--color-text-secondary);
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 1.6;
    transition: color 0.3s ease;
  }
  
  h3 {
    color: var(--color-text-primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }
`;
