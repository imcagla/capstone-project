import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { routes } from "../../routes"
import { changeTheme } from "../../reduxStore/themeChanger"
import { DarkIcon, LightIcon } from '../../styledComponents/Icons';
import { NavbarContent, NavbarTitle, NavMenuIcon, ThemeChangerButton } from '../../styledComponents/NavbarStyles';
import { StyledSelect } from '../../styledComponents/Dropdown';
import { StyledLink } from '../../styledComponents/Link';

function StyledNavbar() {
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    const { theme } = useSelector(state => state)
    const themeName = theme ? "light" : "dark"

    return <NavbarContent>
        <NavbarTitle>
            Movies
        </NavbarTitle>

        <StyledSelect>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
        </StyledSelect>

        <NavMenuIcon onClick={() => setClicked(!clicked)}>{clicked ? "X" : "O"}</NavMenuIcon>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >

            {
                routes.filter(item => item.isNav).map((item, index) => <li className='nav-links' key={index}><StyledLink to={item.pathname} >{item.name}</StyledLink></li>)
            }
        </ul>
        <ThemeChangerButton theme={themeName}
            onClick={() => dispatch(changeTheme(theme))}
        >
            {
                theme ? <DarkIcon /> : <LightIcon />
            }
        </ThemeChangerButton>
    </NavbarContent>;
}

export default StyledNavbar;
