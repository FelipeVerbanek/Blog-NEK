import React from 'react';

import { Container , ContentFull, Content, Logo, Cabeca, Option } from './styles';
import { MdSearch, MdAccountCircle } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import img from '../../assets/logo-default-95x80.png'

export default function header() {
  return (
    <Container>

        <ContentFull>
          <Logo>
               <img src={img} alt=""/>
          </Logo>
          <Content>

            <Option>
              <nav>
                <ul>
                  <li>
                    <span>Support:</span> <a>1-800-700-6200</a>
                  </li>
                  <li>
                    <span>E-mail:</span> <a>mail@demolink.org</a>
                  </li>
                  <li>
                  <aside>
                    <div>
                      <FaFacebookF size={12} color="#000" />
                    </div>
                    <div>
                      <FaTwitter size={12} color="#000" />
                    </div>
                    <div>
                      <FaPinterestP size={12} color="#000" />
                    </div>
                  </aside>                    

                  </li>
                  <button type="button">
                    <div> 
                      <MdAccountCircle size={20} color="#000" />
                    </div>                    
                    LOGIN
                    </button>
                </ul>
              </nav>
            </Option>
            <Cabeca>
              <ul>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>PRICING</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT US</li>              
                <aside>
                  <MdSearch size={20} color="#000"/>
                </aside>
              </ul>
              
            </Cabeca>
            
        </Content>
        </ContentFull>
    </Container>
  );
}
