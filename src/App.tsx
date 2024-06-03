import React from 'react';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import LoginScreen from './components/Auth/LoginScreen';
import Slider from './components/Slider/Slider';
import { SliderProvider } from './contexts/Slider/SliderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <SliderProvider>
    <div className="flex h-screen justify-center bg-white dark:bg-neutral-800 font-sans">
      <GlobalStyle />
      <Slider />
      <LoginScreen />
    </div>
    <ToastContainer />
  </SliderProvider>
);

export default App;