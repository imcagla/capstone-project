import React from 'react';
import {MainContainer} from "../styledComponents/MainContainer"
import { ContactContainer, ContactGrid, ContactColumn } from '../styledComponents/ContactStyle';
import { LinkedinIcon, GithubIcon } from '../styledComponents/Icons';
import { useSelector } from 'react-redux';
import { StyledAnchor } from '../styledComponents/Link';



function Contact() {
  const {theme} = useSelector(state => state)
  const themeName = theme ? "light" : "dark"

  return <MainContainer>
    <ContactContainer theme={themeName}>
    <h1>Get In Touch With Me!</h1>
      <ContactGrid>
        <ContactColumn>
          <h4>İmran Çağla Eyüboğlu</h4>
          <p>Frontend Developer</p>
        </ContactColumn>
        <ContactColumn theme={themeName}>
          <h4>Social</h4>
          <ul>
            <li>
              <StyledAnchor theme={themeName} href="https://github.com/imcagla"><GithubIcon /></StyledAnchor>
            </li>
            <li>
              <StyledAnchor theme={themeName} href="https://www.linkedin.com/in/imrancaglaeyuboglu/"><LinkedinIcon /></StyledAnchor>
            </li>
          </ul>
        </ContactColumn>
        <ContactColumn>
          <h4>Get in Touch</h4>
        </ContactColumn>
      </ContactGrid>
      </ContactContainer>
    </MainContainer>;
}

export default Contact;
