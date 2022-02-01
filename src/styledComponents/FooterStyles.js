import styled from "styled-components";

export const FooterContainer = styled.div`
    text-align: center;
    margin-top: 50px;
    padding: 30px;
    background: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    color: gray;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const FooterColumn = styled.div`
    display: flex;
    text-align: center;
    justify-content:center;
    color: white;
`

export const FooterRow = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    @media only screen and (max-width: 450px ){
        grid-template-columns: auto;
    }
`

export const FooterLink = styled.a`
    color:  ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    margin-bottom: 15px;
    font-size: 14px;
    text-decoration: none;
    &:hover {
        color: #F05454;
        transition: 250ms ease-in;
    }
`
export const FooterTitle = styled.h6`
    color:  ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    margin: 0px 10px 20px 10px;   
    font-size: 1rem;
    font-weight: bold;
`