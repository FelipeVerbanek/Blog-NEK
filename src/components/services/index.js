import React from 'react';
import {IoLogoWindows } from 'react-icons/io'
import {FiDatabase} from 'react-icons/fi'
import {MdWeb, MdDesktopMac, MdPhoneAndroid} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'

import { Container, Content } from './styles';

export default function services() {
  return (
    <Container>
        <h1>Our Services</h1>
        <Content>
          <li>
            <IoLogoWindows color="#0bf" fontSize={60} />
            <h1>Windows Applications</h1>
            <p>We design and develop a variety of applications for Windows including specialized and custom software.</p>
            <button type="button">VIEW DETAILS</button>
          </li>
          <li>
            <FiDatabase color="#0bf" fontSize={60}/>
            <h1>Database Management</h1>
            <p>TechSoft provides top-notch database management solutions for small and medium businesses worldwide.</p>
            <button type="button">VIEW DETAILS</button>
          </li>
          <li>
            <MdWeb color="#0bf" fontSize={60} />
            <h1>UX &amp; UI Design</h1>
            <p>Our team of UX designers creates easy-to-understand interfaces for all kinds of applications.</p>
            <button type="button">VIEW DETAILS</button>
          </li>
          <li>
            <MdDesktopMac color="#0bf" fontSize={60} />
            <h1>iOS/MacOS Apps</h1>
            <p>Our company also develops multipurpose applications for iOS and MacOS systems and devices.</p>
            <button type="button">VIEW DETAILS</button>
          </li>
          <li>
            <AiOutlineCheck color="#0bf" fontSize={60} />
            <h1>QA &amp; Testing</h1>
            <p>We design and develop a variety of applications for Windows including specialized and custom software.</p>            
            <button type="button">VIEW DETAILS</button>
          </li>
          <li>
            <MdPhoneAndroid color="#0bf" fontSize={60} />
            <h1>Android Applications</h1>
            <p>Our Android apps are highly rated by media and our users as they offer great features on all Android devices.</p>
            <button type="button">VIEW DETAILS</button>
            
          </li>
        </Content>
    </Container>
  );
}
