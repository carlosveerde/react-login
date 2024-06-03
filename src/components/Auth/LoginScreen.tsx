import React from 'react';
import SocialButtons from './SocialButtonsContainer';
import WelcomeMessage from './Welcome';
import LoginForm from './LoginForm';
import Header from '../Layout/Header';
import { useSlider } from "../../contexts/Slider/SliderContext";
import Divider from './Divider';

const LoginScreen: React.FC = () => {
  const { isOpen } = useSlider();

  return (
    <div
        className={`h-full md:w-full w-full p-12 justify-center
        ${
          isOpen
            ? "md:w-1/3 w-full lg:w-1/3"
            : "w-full xl:w-5/12"
        }`}
      >
      <div>
        <Header />
        <WelcomeMessage />
        <SocialButtons />
        <Divider />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;