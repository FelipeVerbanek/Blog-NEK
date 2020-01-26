import React from 'react';

import { Container } from './styles';

import Slider from '../../components/carousel'
import Services from '../../components/services'
export default function home() {
  return (
    <Container>
      <Slider />   
      <Services />         
    </Container>
    
    
  );
}
