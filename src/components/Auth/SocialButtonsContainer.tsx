import React  from 'react';
import SocialButton from '../UI/SocialButton';
import { useTheme } from '../../contexts/Theme/ThemeContext';

import appleIcon from '../../assets/icons/apple.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import toolzzIcon from '../../assets/icons/toolzz.svg';
import toolzzIconLight from '../../assets/icons/toolzz-light.svg';
import appleIconLight from '../../assets/icons/apple-light.svg';
import facebookIconLight from '../../assets/icons/facebook-light.svg';
import twitterIconLight from '../../assets/icons/twitter-light.svg';
import toolzzIconBlue from '../../assets/icons/toolzz-blue.svg';
import appleIconBlue from '../../assets/icons/apple-blue.svg';
import facebookIconBlue from '../../assets/icons/facebook-blue.svg';
import twitterIconBlue from '../../assets/icons/twitter-blue.svg';

const SocialButtons: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className='grid grid-flow-col justify-stretch w-full gap-2'>
        <SocialButton
            iconSrc={isDarkMode ? toolzzIconLight : toolzzIcon}
            iconHoverSrc={toolzzIconBlue}
            onClick={() => console.log('Login com Toolzz')}
        />
        <SocialButton 
            iconSrc={isDarkMode ? facebookIconLight : facebookIcon}
            iconHoverSrc={facebookIconBlue}
            onClick={() => console.log('Login com Apple')}
        />
        <SocialButton
            iconSrc={isDarkMode ? appleIconLight : appleIcon}
            iconHoverSrc={appleIconBlue}
            onClick={() => console.log('Login com Facebook')}
        />
        <SocialButton
            iconSrc={isDarkMode ? twitterIconLight : twitterIcon}
            iconHoverSrc={twitterIconBlue}
            onClick={() => console.log('Login com Twitter')}
        />
    </div>
  );
};

export default SocialButtons;