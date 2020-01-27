import React from 'react';

import { Container } from './styles';

import Slider from '../../components/carousel'
import Services from '../../components/services'
import Pricing from '../../components/pricing'
import Footer from '../../components/footer'

export default function home() {
  return (
    <Container>
      <Slider />   
      <Services />   
      <Pricing />    
      <Footer />
    </Container>
    
    
  );
}
