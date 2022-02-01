import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
    text-decoration:none;
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
    }
`

export const StyledTitleLink = styled(Link)`
    text-decoration:none;
    color: #DDDDDD;
    &:hover {
        color: white;
    }
`

export const StyledAnchor = styled.a`
    text-decoration:none;
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
    }
`
