import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
    text-decoration:none;
    color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
    }
`

export {StyledLink}