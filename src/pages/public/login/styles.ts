import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 20%, #1a1a1a 40%, #0a0a0a 60%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  
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
`;

export const LoginCard = styled.div`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LoginTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  color: #e0e0e0;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.9rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:disabled {
    background: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const LoginButton = styled.button`
  background: white;
  color: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  
  &:hover:not(:disabled) {
    background: #f0f0f0;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  
  &:hover {
    color: white;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
  }
`;
