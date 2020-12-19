import React from 'react'
import styled from 'styled-components';
import LogoImage from '../assets/fabelio-icon-bg.png';
import LogoIcon1 from '../assets/fabelio-icon-1.png';
import LogoIcon2 from '../assets/fabelio-icon-2.png';
import LogoIcon3 from '../assets/fabelio-icon-3.png';
import { updown, inout } from './Animation';

export let LoadingImage = [LogoImage, LogoIcon1, LogoIcon2,LogoIcon3 ];

let Loading = ({ isLoaded }) =>
  <LoadingBackground isLoaded={isLoaded} >
    <LoadingItemContainer>
      <img src={LogoImage} style={{ height: '100%' }} alt='fab-icon-bg' />
      <ImageIcon src={LogoIcon1} style={{ left: '23%', top: '45%', animationDelay: '0.1s' }} alt='fab-icon' />
      <ImageIcon src={LogoIcon2} style={{ left: '41%', top: '45%', animationDelay: '0.5s' }} alt='fab-icon' />
      <ImageIcon src={LogoIcon3} style={{ left: '60%', top: '45%', animationDelay: '0.3s' }} alt='fab-icon' />
    </LoadingItemContainer>
  </LoadingBackground>

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