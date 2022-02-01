import React from 'react';
import { useSelector } from 'react-redux';
import { FooterContainer, FooterWrapper, FooterRow, FooterColumn, FooterTitle, FooterLink } from '../../styledComponents/FooterStyles';
import { TwitterIcon, InstagramIcon } from '../../styledComponents/Icons';
import { StyledLink } from "../../styledComponents/Link"


function Footer() {
  const { theme, user } = useSelector(state => state)
  const themeName = theme ? "light" : "dark"


  return <FooterContainer theme={themeName}>
    <FooterWrapper>
      <FooterRow>
      <FooterColumn>
          <FooterLink theme={themeName} href={user.socials.twitter} >
            <TwitterIcon theme={themeName} />
            Twitter
          </FooterLink>
          <FooterLink theme={themeName} href={user.socials.instagram} >
            <InstagramIcon theme={themeName} />
            Instagram
          </FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterRow>
        <FooterColumn>
           <StyledLink to="/about" ><FooterTitle theme={themeName}> About</FooterTitle></StyledLink>
           <StyledLink to="/contact" ><FooterTitle theme={themeName}>Contact</FooterTitle></StyledLink> 
           <StyledLink to="/profile" ><FooterTitle theme={themeName}>Profile</FooterTitle></StyledLink> 
           {
             user.userLogin ? "" : <StyledLink to="/login" ><FooterTitle theme={themeName}>Login</FooterTitle></StyledLink>
           }
            
        </FooterColumn>
      </FooterRow>
      <small>&copy; 2021 Imran Cagla Eyuboglu - UP SCHOOL</small>
    </FooterWrapper>
  </FooterContainer>;
}

export default Footer;
