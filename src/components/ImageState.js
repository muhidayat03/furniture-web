import React from 'react';
import styled from 'styled-components';
import ErrorImage from '../assets/error.png';
import EmptyImage from '../assets/empty.png';
import { inout } from './Animation';


const ImageState = ({ type }) => <Image src={type === 'error' ? ErrorImage : EmptyImage} />

const Image = styled.img`
  margin: 80px auto;
  width: 200px; 
  animation: ${inout} 3s ease infinite;
`;

export default ImageState;