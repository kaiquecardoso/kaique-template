import styled from '@emotion/styled';

export const HomeContainer = styled.div`
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
  
  p {
    color: var(--color-text-tertiary);
    transition: color 0.3s ease;
  }
`;

export const WelcomeCard = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  h1 {
    color: var(--color-text-primary);
    margin-bottom: 15px;
    font-size: 2.2rem;
    font-weight: 700;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatCard = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  padding: 25px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

export const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 10px;
  transition: color 0.3s ease;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
`;
