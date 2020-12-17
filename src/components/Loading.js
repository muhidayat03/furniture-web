import React from 'react'
import LogoImage from '../assets/fabelio-icon-bg.png';
import LogoIcon1 from '../assets/fabelio-icon-1.png';
import LogoIcon2 from '../assets/fabelio-icon-2.png';
import LogoIcon3 from '../assets/fabelio-icon-3.png';
import styled, { keyframes } from 'styled-components';

let Loading = ({ isLoaded }) =>
  <LoadingBackground isLoaded={isLoaded} >
    <LoadingItemContainer>
      <img src={LogoImage} style={{ height: '100%' }} />
      <ImageIcon src={LogoIcon1} style={{ left: '23%', top: '45%', animationDelay: '0.1s' }} />
      <ImageIcon src={LogoIcon2} style={{ left: '41%', top: '45%', animationDelay: '0.5s' }} />
      <ImageIcon src={LogoIcon3} style={{ left: '60%', top: '45%', animationDelay: '0.3s' }} />
    </LoadingItemContainer>
  </LoadingBackground>



const updown = keyframes`
  0% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-20%);
  }
  100% {
    transform: translatey(0);
  } 
`;

const inout = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);

  }
  100% {
    transform: scale(1);
  } 
`;

const LoadingItemContainer = styled.div`
animation: ${inout} 3s ease infinite;
position: 'relative';
height: 180px;
`;

const ImageIcon = styled.img`
  animation: ${updown} 2s ease infinite;
  height : 20%;
  position: absolute; 
`;

const LoadingBackground = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #FED700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 200;
  opacity: ${({ isLoaded }) => isLoaded ? 0 : 1};
  visibility: ${({ isLoaded }) => isLoaded ? 'hidden' : 'visible'};
  transition: opacity 1s, visibility 0.5s linear 1s; 
`;


export default Loading;