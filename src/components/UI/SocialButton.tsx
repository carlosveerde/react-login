import React, { useState } from 'react';

interface SocialButtonProps {
  iconSrc: string;
  iconHoverSrc: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ iconSrc, iconHoverSrc, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      className="
        flex items-center justify-center bg-transparent border 
        border-black p-2.5 rounded-lg cursor-pointer transition-all duration-300 
        dark:border-white hover:border-blue-700  dark:hover:border-blue-700
      "
    >
      <img src={isHovering ? iconHoverSrc : iconSrc} alt="" className="w-4 h-4"/>
    </button>
  )
};

export default SocialButton;