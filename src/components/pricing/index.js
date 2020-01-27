import React from 'react';

import { Container, Content, Title, Card, Sifr, Price, ContentPrice, Bestseller } from './styles';

export default function pricing() {
  return (
    <Container >
        <h1>Pricing Plans</h1>
        <Content>
            <Card>
                <Title>
                    <p>BASIC</p>
                </Title>         
                <ContentPrice>
                    <Sifr>$</Sifr>
                    <Price>399</Price>
                    <Sifr>99</Sifr>
                </ContentPrice>  
                <ul>
                    <li><strong>Concept development UI design</strong></li>    
                    <li>Configuration management</li>    
                    <li>Software quality assurance</li>    
                    <li>App integration</li>    
                    <li><button type="button">ORDER NOW</button></li>
                </ul>      
                
            </Card>
            <Card>
                <Title>
                <Bestseller>Bestseller</Bestseller>      
                    <span>OPTIMAL</span>
                </Title>         
                <ContentPrice>
                    <Sifr>$</Sifr>
                    <Price best={true}>599</Price>
                    <Sifr best={true}>99</Sifr>
                </ContentPrice>    
                <ul>
                    <li><strong>Concept development UI design</strong></li>    
                    <li><strong>Configuration management</strong></li>    
                    <li><strong>Software quality assurance</strong></li>    
                    <li>App integration</li> 
                    <li><button type="button">ORDER NOW</button></li>   
                </ul>    
            </Card>
            <Card>
                
                <Title>                         
                    <p>ULTIMATE</p>
                </Title>         
                <ContentPrice>
                    <Sifr>$</Sifr>
                    <Price>999</Price>
                    <Sifr>99</Sifr>
                </ContentPrice>    
                <ul>
                    <li><strong>Concept development UI design</strong></li>    
                    <li><strong>Configuration management</strong></li>    
                    <li><strong>Software quality assurance</strong></li>    
                    <li><strong>App integration</strong></li> 
                    <li><button type="button">ORDER NOW</button></li>    
                </ul>   
            </Card>
        </Content>
    </Container>
  );
}
