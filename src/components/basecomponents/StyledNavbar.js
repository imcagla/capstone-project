import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { HiMenu } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"
import {BsMoonStars} from "react-icons/bs"
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


    return <NavbarContent theme={theme}>
        <NavbarTitle theme={theme} >
            <StyledLink onClick={() => setClicked(false)} theme={theme} to="/"> <BsMoonStars/> CineMoon</StyledLink>
        </NavbarTitle>

        <NavMenuIcon theme={theme} onClick={() => setClicked(!clicked)}>{clicked ? <FaTimes /> : <HiMenu />}</NavMenuIcon>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
            <Dropdown theme={theme} onClick={() => setClicked(false)}>
                Movies
                <DropdownList theme={theme} >
                    <li onClick={(e) => dispatch(getSortVal(e.target.name))}>
                        <StyledLink theme={theme} name="vote_average.desc"  to="/sort-filter/vote_average.desc">
                            Top Rated
                        </StyledLink></li>
                    <li onClick={(e) => dispatch(getSortVal(e.target.name))}>  
                    <StyledLink theme={theme} name="popularity.desc" to="/sort-filter/popularity.desc">
                        Popular
                    </StyledLink></li>
                </DropdownList>
            </Dropdown>

            {
                routes.filter(item => item.isNav).map((item, index) => <li onClick={() => setClicked(false)} className='nav-links' key={index}><StyledLink theme={theme} to={item?.pathname} >{item.name}</StyledLink></li>)
            }
            {!user.userLogin ? <li className='nav-links'>
                <StyledLink onClick={() => setClicked(false)} theme={theme} to="/login" >
                    Login
                </StyledLink>
            </li> : <><li className='nav-links'>
                <StyledLink onClick={() => setClicked(false)} theme={theme} to="/profile" >
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
        <ThemeChangerButton theme={theme}
            onClick={() => dispatch(changeTheme(theme))}
        >
            {
                theme === "light" ? <DarkIcon /> : <LightIcon />
            }
        </ThemeChangerButton>
    </NavbarContent>;
}

export default StyledNavbar;
