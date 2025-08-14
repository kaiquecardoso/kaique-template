import styled from '@emotion/styled';

export const LandingContainer = styled.div`
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

export const HeroSection = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
  line-height: 1.6;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

export const CTAButton = styled.button`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  font-weight: 600;
  
  &:hover {
    background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;
