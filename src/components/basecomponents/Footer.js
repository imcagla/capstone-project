import React from 'react';
import { useSelector } from 'react-redux';
import { FooterContainer, FooterWrapper, FooterRow, FooterColumn, FooterTitle, FooterLink } from '../../styledComponents/FooterStyle';
import { TwitterIcon, InstagramIcon } from '../../styledComponents/Icons';
import { StyledLink } from "../../styledComponents/Link"


function Footer() {
  const { theme, user } = useSelector(state => state)


  return <FooterContainer theme={theme}>
    <FooterWrapper>
      <FooterRow>
      <FooterColumn>
          <FooterLink theme={theme} href={user.socials.twitter} >
            <TwitterIcon theme={theme} />
            Twitter
          </FooterLink>
          <FooterLink theme={theme} href={user.socials.instagram} >
            <InstagramIcon theme={theme} />
            Instagram
          </FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterRow>
        <FooterColumn>
           <StyledLink to="/about" ><FooterTitle theme={theme}> About</FooterTitle></StyledLink>
           <StyledLink to="/contact" ><FooterTitle theme={theme}>Contact</FooterTitle></StyledLink> 
           <StyledLink to="/profile" ><FooterTitle theme={theme}>Profile</FooterTitle></StyledLink> 
           {
             user.userLogin ? "" : <StyledLink to="/login" ><FooterTitle theme={theme}>Login</FooterTitle></StyledLink>
           }
            
        </FooterColumn>
      </FooterRow>
      <small>&copy; 2021 Imran Cagla Eyuboglu - UP SCHOOL</small>
    </FooterWrapper>
  </FooterContainer>;
}

export default Footer;
