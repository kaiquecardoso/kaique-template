import React from 'react';
import { Link } from '@tanstack/react-router';
import { LandingContainer, HeroSection, Title, Subtitle, CTAButton } from './styles';

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>
      <HeroSection>
        <Title>Bem-vindo ao Kaique Template</Title>
        <Subtitle>
          Uma solução moderna e elegante para suas aplicações React
        </Subtitle>
        <Link to="/login">
          <CTAButton>Fazer Login</CTAButton>
        </Link>
      </HeroSection>
    </LandingContainer>
  );
};

export default LandingPage;
