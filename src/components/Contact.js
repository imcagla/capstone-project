import React from 'react';
import {MainContainer} from "../styledComponents/MainContainer"
import { ContactContainer, ContactGrid, ContactColumn } from '../styledComponents/ContactStyle';
import { LinkedinIcon, GithubIcon, MailIcon } from '../styledComponents/Icons';
import { useSelector } from 'react-redux';
import { StyledAnchor } from '../styledComponents/Link';



function Contact() {
  const {theme} = useSelector(state => state)

  return <MainContainer>
    <ContactContainer theme={theme}>
    <h1>Get In Touch With Me!</h1>
      <ContactGrid>
        <ContactColumn>
          <h4>İmran Çağla Eyüboğlu</h4>
          <p>Frontend Developer</p>
        </ContactColumn>
        <ContactColumn theme={theme}>
          <h4>Social</h4>
          <ul>
            <li>
              <StyledAnchor theme={theme} href="https://github.com/imcagla"><GithubIcon /></StyledAnchor>
            </li>
            <li>
              <StyledAnchor theme={theme} href="https://www.linkedin.com/in/imrancaglaeyuboglu/"><LinkedinIcon /></StyledAnchor>
            </li>
          </ul>
        </ContactColumn>
        <ContactColumn>
          <h4>Get in Touch</h4>
          <StyledAnchor theme={theme} href="mailto:caglaeyubog@gmail.com"><MailIcon /></StyledAnchor>
        </ContactColumn>
      </ContactGrid>
      </ContactContainer>
    </MainContainer>;
}

export default Contact;
