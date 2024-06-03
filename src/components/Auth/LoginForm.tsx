import React from 'react';
import SocialButtons from './SocialButtonsContainer';
import WelcomeMessage from './Welcome';



const LoginForm: React.FC = () => {
  return (
    <div className='h-full px-10 md:w-full w-full flex justify-center dark:bg-neutral-800 w-full md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12'>
      <div className='w-full'>
        <WelcomeMessage />
        <SocialButtons />
      </div>
    </div>
  );
};

export default LoginForm;