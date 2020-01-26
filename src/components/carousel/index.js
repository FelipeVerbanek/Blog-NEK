import React from 'react';
import Slider from 'infinite-react-carousel';
import { Container } from './styles';

export default function carousel() {
  return (
    <Slider  arrows={false}>        
        
        <Container src={"business.jpg"}>  

            <div>                   
                <h1>Welcome to TechSoft</h1>
                <p>Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes.</p>       
                <button type="button">READ MORE</button>
            </div>
        </Container>  
        <Container>
            
        </Container>
  </Slider>
  );
}
