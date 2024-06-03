import React from 'react';
import styled from 'styled-components';
import SocialButtons from './SocialButtonsContainer';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 644px; 
  max-width: 100%;
  margin: auto; 
  padding: 20px;
`;

const LoginForm: React.FC = () => {
  return (
    <LoginContainer>
      <SocialButtons />
    </LoginContainer>
  );
};

export default LoginForm;