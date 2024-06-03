import React from 'react';
import styled from 'styled-components';

interface SocialButtonProps {
  iconSrc: string;
  onClick: () => void;
}

const StyledSocialButton = styled.button<Omit<SocialButtonProps, 'iconSrc'>>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent; 
    border: 1px solid #151515;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      size: 18px;
    }

    &:hover {
    border-color: #ccc; 
    background-color: #f7f7f7; 
    }
`;

const SocialButton: React.FC<SocialButtonProps> = ({ iconSrc, onClick }) => (
  <StyledSocialButton onClick={onClick}>
    <img src={iconSrc} alt=''/>
  </StyledSocialButton>
);

export default SocialButton;