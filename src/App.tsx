import React from 'react';
import LoginForm from './components/Auth/LoginForm';
import { GlobalStyle } from './assets/styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LoginForm />
    </>
  );
};

export default App;