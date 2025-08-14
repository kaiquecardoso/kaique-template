import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../../hooks/useAuth';
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
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpar erro quando o usuário digitar
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simula uma chamada de API de login
      // Aqui você implementaria a lógica de autenticação real
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simula dados de resposta da API
      const mockResponse = {
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: 1,
          email: formData.email,
          name: 'Usuário Demo',
          role: 'admin'
        }
      };
      
      // Faz login usando o hook
      login(mockResponse.token, mockResponse.user);
      
      // Redireciona para a página home autenticada
      navigate({ to: '/auth/home' });
      
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Fazer Login</LoginTitle>
        <Form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              color: 'var(--color-error)',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '16px',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}
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
        
        {/* Credenciais de demonstração */}
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '6px',
          fontSize: '0.85rem',
          textAlign: 'center',
          color: 'var(--color-text-secondary)'
        }}>
          <strong>Demo:</strong> Use qualquer email e senha para testar
        </div>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
