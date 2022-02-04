import styled from "styled-components";
import { DarkIcon, LightIcon } from "./Icons";


export const NavbarContent = styled.nav`
    background: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 100%;
    z-index: 99999;

    @media only screen and (max-width: 960px) {
        position: relative;
    }
    
    & > .nav-menu {
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        align-items:center;
        width: 70vw;
        justify-content: end;
        margin-right: 1.5rem;

        @media only screen and (max-width: 960px) {
            flex-direction: column;
            width: 100%;
            height: auto;
            position: absolute;
            top: 60px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }
    }

    & .active {
        @media only screen and (max-width: 960px) {
        display: block;
        background-color: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
        padding-right: 30px;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
        }
    }

    & > ul {
        & > .nav-links {
            text-decoration: none;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            align-items:center;
            &:hover {
                background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
                border-radius: 5px;
                transition: all 0.2s ease-out;
            }

            @media only screen and (max-width: 960px) {
                text-align: center;
                padding: 2rem;
                width: 100%;
                display: table;
                list-style: none;
                &:hover {
                    background-color:${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
                    border-radius: 0;
                }
            }
        }
    }
    

    
`

export const NavbarTitle = styled.h3`
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
`

export const NavMenuIcon = styled.div`
    display:none;
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    @media only screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2.5rem;
        cursor: pointer;
    }
`

export const ThemeChangerButton = styled.button`
    border-radius: 50%;
    padding: 8px 15px;
    background-color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    color:  ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    border: 2px solid #F05454;
    @media only screen and (max-width: 960px) {
        margin-right: auto;
        margin-left: 15px;
    }
    &:hover ${DarkIcon}  {
        transform: scale(1.5) rotate(360deg);
        color: white;
    }
    &:hover ${LightIcon}  {
        transform: scale(1.5) rotate(360deg);
        color: white;
    }
`


export const ProfileImg = styled.img`
    border-radius: 100%;
    width: ${props => props.width};
    box-shadow: 0 0 5px rgb(34, 40, 49, 0.5);
`