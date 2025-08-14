import styled from '@emotion/styled';

export const ConfigContainer = styled.div`
  h1 {
    color: #2c3e50;
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
  }
  
  h2 {
    color: #34495e;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SaveButton = styled.button`
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

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
`;

export const ConfigSection = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;

export const ConfigCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
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
  border-bottom: 1px solid #f1f3f4;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.label`
  color: #495057;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 200px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 200px;
  background: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const Switch = styled.input`
  appearance: none;
  width: 50px;
  height: 26px;
  background: #ccc;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:checked {
    background: #27ae60;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease;
  }
  
  &:checked::before {
    transform: translateX(24px);
  }
`;
