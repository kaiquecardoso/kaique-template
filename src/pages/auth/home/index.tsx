import React from 'react';
import AuthLayout from '../../../components/layouts/AuthLayout';
import { HomeContainer, WelcomeCard, StatsGrid, StatCard, StatValue, StatLabel } from './styles';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Usuários Ativos', value: '1,234', color: '#3498db' },
    { label: 'Projetos', value: '56', color: '#2ecc71' },
    { label: 'Tarefas', value: '89', color: '#f39c12' },
    { label: 'Relatórios', value: '23', color: '#e74c3c' }
  ];

  return (
    <AuthLayout>
      <HomeContainer>
        <WelcomeCard>
          <h1>Bem-vindo de volta! 👋</h1>
          <p>Gerencie seus projetos e usuários de forma eficiente</p>
        </WelcomeCard>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} style={{ borderLeftColor: stat.color }}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
        
        <div style={{ marginTop: '40px' }}>
          <h2>Atividade Recente</h2>
          <p>Nenhuma atividade recente para exibir.</p>
        </div>
      </HomeContainer>
    </AuthLayout>
  );
};

export default HomePage;
