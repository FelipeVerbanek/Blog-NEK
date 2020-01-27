import React from 'react';
import {FaHeadphonesAlt} from 'react-icons/fa'

import { Container, ContentInitial, ContentSuport, Text, Icon, LabelSubscribe, ContentSubscribe, ContentDetails, Header, Rp } from './styles';


export default function footer() {
  return (
    <>
    <Container>
        <Header>
            <ContentInitial>
                <ContentSuport>
                    <Icon>
                        <FaHeadphonesAlt fontSize={30} color={'#fff'}/>
                    </Icon>
                    <Text>
                        <h1>1-800-700-6200</h1>
                        <p>Our Support Service is always available 24 hours a day</p>
                    </Text>
                </ContentSuport>
            </ContentInitial>
            <ContentInitial>
                <LabelSubscribe>
                    <h1>Subscribe</h1>
                    <p>Get the latest updates and offers</p>
                </ LabelSubscribe>
                <ContentSubscribe>
                    <input type="text"  placeholder="Insira seu e-mail"/>
                    <button type="button">SUBSCRIBE</button>
                </ContentSubscribe>
            </ContentInitial>
        </Header>
        <ContentDetails>
            <div>
                <h1>ABOUT US</h1>
                <ul>
                    <li>Our company has been developing high-quality and reliable software for corporate needs since 2008.</li>                    
                </ul>
            </div>
            <div>
                <h1>LATEST NEWS </h1>
                <ul>
                    <li>Our company has been developing high-quality and reliable software for corporate needs since 2008.</li>                    
                </ul>
            </div>
            <div>
                <h1>USEFUL LINKS</h1>
                <ul>
                    <li>Our company has been developing high-quality and reliable software for corporate needs since 2008.</li>                    
                </ul>
            </div>
        </ContentDetails>
    </Container>
    <Rp>
        <div>
            <p>
                ©  2020 Techsoft. Privacy Policy
            </p>
            <p>
                FAQ Support
            </p>
        </div>
    </Rp>
    </>
  );
}
