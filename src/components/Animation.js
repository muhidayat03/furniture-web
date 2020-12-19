import { keyframes } from 'styled-components';

export const updown = keyframes`
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

export const inout = keyframes`
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