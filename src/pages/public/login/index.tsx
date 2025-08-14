import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import {
  LoginContainer,
  LoginCard,
  LoginTitle,
  Form,
  FormGroup,
  Input,
  Label,
  LoginButton,
  BackLink
} from './styles';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    
    // Simula um login bem-sucedido
    // Aqui você implementaria a lógica de autenticação real
    if (formData.email && formData.password) {
      setIsLoading(true);
      
      // Simula um delay de processamento
      setTimeout(() => {
        console.log('Login realizado com sucesso!');
        setIsLoading(false);
        // Redireciona para a página home autenticada
        navigate({ to: '/auth/home' });
      }, 1000);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Fazer Login</LoginTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              disabled={isLoading}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              disabled={isLoading}
            />
          </FormGroup>
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </LoginButton>
        </Form>
        <Link to="/">
          <BackLink>← Voltar para Home</BackLink>
        </Link>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
