import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  h1 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  h2 {
    color: #34495e;
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  p {
    color: #7f8c8d;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const WelcomeCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  border-left: 5px solid #3498db;
  
  h1 {
    margin-bottom: 15px;
  }
  
  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  border-left: 4px solid;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
