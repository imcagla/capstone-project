import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { HiMenu } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"
import { routes } from "../../routes"
import { userLogout } from "../../reduxStore/user"
import { changeTheme } from "../../reduxStore/themeChanger"
import { getSortVal } from "../../reduxStore/sortFilterStates"
import { DarkIcon, LightIcon, LogOutIcon } from '../../styledComponents/Icons';
import { StyledLink } from '../../styledComponents/Link';
import {Dropdown, DropdownList} from "../../styledComponents/Dropdown"
import { NavbarContent, NavbarTitle, NavMenuIcon, ThemeChangerButton, ProfileImg } from '../../styledComponents/NavbarStyles';


function StyledNavbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    const { theme, user } = useSelector(state => state)
    const themeName = theme ? "light" : "dark"

    return <NavbarContent theme={themeName}>
        <NavbarTitle theme={themeName} >
            <StyledLink onClick={() => setClicked(false)} theme={themeName} to="/">Movies</StyledLink>
        </NavbarTitle>

        <NavMenuIcon theme={themeName} onClick={() => setClicked(!clicked)}>{clicked ? <FaTimes /> : <HiMenu />}</NavMenuIcon>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
            <Dropdown theme={themeName} onClick={() => setClicked(!clicked)}>
                Movies
                <DropdownList theme={themeName} >
                    <li onClick={(e) => dispatch(getSortVal(e.target.name))}>
                        <StyledLink theme={themeName} name="vote_average.desc"  to="/sort-filter/vote_average.desc">
                            Top Rated
                        </StyledLink></li>
                    <li onClick={(e) => dispatch(getSortVal(e.target.name))}>  
                    <StyledLink theme={themeName} name="popularity.desc" to="/sort-filter/popularity.desc">
                        Popular
                    </StyledLink></li>
                </DropdownList>
            </Dropdown>

            {
                routes.filter(item => item.isNav).map((item, index) => <li onClick={() => setClicked(!clicked)} className='nav-links' key={index}><StyledLink theme={themeName} to={item?.pathname} >{item.name}</StyledLink></li>)
            }
            {!user.userLogin ? <li className='nav-links'>
                <StyledLink onClick={() => setClicked(!clicked)} theme={themeName} to="/login" >
                    Login
                </StyledLink>
            </li> : <><li className='nav-links'>
                <StyledLink onClick={() => setClicked(!clicked)} theme={themeName} to="/profile" >
                    <ProfileImg width={"30px"} src={user.avatarUrl} alt="" />
                </StyledLink>
            </li>
                <li className='nav-links'>
                    <LogOutIcon onClick={() => {
                        dispatch(userLogout())
                        navigate(`/login`)
                        setClicked(false)
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
