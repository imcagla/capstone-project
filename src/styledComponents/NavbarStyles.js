import styled from "styled-components";

export const NavbarContent = styled.nav`
    background: linear-gradient(120deg, #ffe02d, #fccf05);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1.3rem;
    position: fixed;
    width: 100vw;
    z-index: 99999;

    @media only screen and (max-width: 960px) {
        position: relative;
    }
    
    & > .nav-menu {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin-right: 1.5rem;

        @media only screen and (max-width: 960px) {
            display: flex;
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
        background: tomato;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
        }
    }

    & > ul {
        & > .nav-links {
            color: white;
            text-decoration: none;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            align-items:center;
            &:hover {
                background-color: #fdfd2550;
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
                    background-color: #fdfd25b0;
                    border-radius: 0;
                }
            }
        }

        & > .nav-links-mobile {
            display: none;
            &:hover {
                background: white;
                color: tomato;
                transition: 250ms;
            }
            @media only screen and (max-width: 960px) {
                display: block;
                padding: 1.5rem;
                margin: 0 auto 1.5rem;
                background: tomato;
                border-radius: 15px;
                text-decoration: none;
                color: white;
                text-align: center;
                width: 80vw;
            }
        }
    }
    

    
`

export const NavbarTitle = styled.h1`
    color: white;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    @media only screen and (max-width: 960px) {
        display:none;
    }
`

export const NavMenuIcon = styled.div`
    display:none;
    @media only screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const ThemeChangerButton = styled.button`
    border-radius: 50%;
    padding: 8px 15px;
    background-color: ${props => props.theme === "dark" ? "tomato" : "black"};
    color: white;
    border: 2px solid tomato;
`
