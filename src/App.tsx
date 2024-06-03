import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import LoginScreen from './components/Auth/LoginScreen';
import Slider from './components/Slider/Slider';
import { SliderProvider } from './contexts/Slider/SliderContext';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <SliderProvider>
      <div className="flex h-screen justify-center bg-white">
        <GlobalStyle />
        <Slider />
        <LoginScreen />
      </div>
    </SliderProvider>
  );
};

export default App;