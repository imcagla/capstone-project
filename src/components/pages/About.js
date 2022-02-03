import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from "../../styledComponents/BaseStyleComponents"
import { AboutContainer } from '../../styledComponents/AboutStyle';
import { FavoriteIcon, WatchedIcon } from '../../styledComponents/Icons';

function About() {
  const {theme} = useSelector(state => state)

  return <MainContainer>
    <AboutContainer theme={theme}>
      <h3>UP School Capstone Project</h3>
      <p>
        This project is the capstone project given at UP School Front-end Development Program, created by Imran Cagla Eyuboglu. <a href="https://developers.themoviedb.org/4/getting-started/authorization">The Movie Database API</a> is used. The Movie Database API provides a large database about Movies. People can find any kind of movie they look for in this page, by filtering, sorting and searching. First thing to do is LOGIN!
      </p>
      Login informations:
      <ul>
        <li>username: "username"</li>
        <li>password: "password"</li>
      </ul>
      <p>
        After login, profile page is activated. Do not hesitate to use  <FavoriteIcon loc={"table"} />, <WatchedIcon loc={"table"} /> icon actions, and create your own collection includes your favorites and seen movies in your profile. There will be counter in the profile to calculate totals. Have fun! 	&#128523;
      </p>

      <h6>Technologies:</h6>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Redux</li>
        <li>Styled components</li>
        <li>Redux-Persist</li>
      </ul>
    </AboutContainer>
  </MainContainer>;
}

export default About;
