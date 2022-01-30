import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { routes } from "../../routes"
import { changeTheme } from "../../reduxStore/themeChanger"
import { DarkIcon, LightIcon } from '../../styledComponents/Icons';
import { NavbarContent, NavbarTitle, NavMenuIcon, ThemeChangerButton, ProfileImg } from '../../styledComponents/NavbarStyles';
import { StyledSelect } from '../../styledComponents/Dropdown';
import { StyledLink } from '../../styledComponents/Link';
import { HiMenu } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"
import { LogOutIcon } from '../../styledComponents/Icons';
import { userLogout } from "../../reduxStore/user"

function StyledNavbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    const { theme, user } = useSelector(state => state)
    const themeName = theme ? "light" : "dark"

    return <NavbarContent theme={themeName}>
        <NavbarTitle theme={themeName} >
            <StyledLink theme={themeName} to="/">Movies</StyledLink>
        </NavbarTitle>

        <NavMenuIcon theme={themeName} onClick={() => setClicked(!clicked)}>{clicked ? <FaTimes /> : <HiMenu />}</NavMenuIcon>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
            <StyledSelect
                onClick={(e) => {
                    e.target.options[e.target.selectedIndex].value !== "" && navigate(`/sort-filter/${e.target.options[e.target.selectedIndex].value}`)
                }}
                className='nav-links'>
                <option disabled selected value=""> Movies </option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
            </StyledSelect>
            {
                routes.filter(item => item.isNav).map((item, index) => <li className='nav-links' key={index}><StyledLink theme={themeName} to={item.pathname} >{item.name}</StyledLink></li>)
            }
            {!user.userLogin ? <li className='nav-links'>
                <StyledLink theme={themeName} to="/login" >
                    Login
                </StyledLink>
            </li> : <><li className='nav-links'>
                <StyledLink theme={themeName} to="/profile" >
                    <ProfileImg width={"30px"} src={user.avatarUrl} alt="" />
                </StyledLink>
            </li>
            <li className='nav-links'>
                    <LogOutIcon onClick={() => {
                        dispatch(userLogout())
                        navigate(`/login`)
                        }} />
            </li></>
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
