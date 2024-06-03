import React from 'react';
import SocialButton from '../UI/src/components/UI/SocialButton';

import appleIcon from '../../assets/icons/apple.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import toolzzIcon from '../../assets/icons/toolzz.svg';

const SocialButtons: React.FC = () => {
  return (
    <div className='grid grid-flow-col justify-stretch w-full p-6'>
        <SocialButton
            iconSrc={toolzzIcon}
            onClick={() => console.log('Login com Toolzz')}
        />
        <SocialButton
            iconSrc={facebookIcon}
            onClick={() => console.log('Login com Facebook')}
        />
        <SocialButton 
            iconSrc={appleIcon}
            onClick={() => console.log('Login com Apple')}
        />
        <SocialButton
            iconSrc={twitterIcon}
            onClick={() => console.log('Login com Twitter')}
        />
    </div>
  );
};

export default SocialButtons;