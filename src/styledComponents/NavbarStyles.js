import styled from "styled-components";

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
        grid-template-columns: repeat(4, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
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

export const NavbarTitle = styled.h1`
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    @media only screen and (max-width: 960px) {
        display:none;
    }
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
`