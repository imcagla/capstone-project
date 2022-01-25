import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
    text-decoration:none;
    color: white;
    &:hover {
        color: whitesmoke;
    }
`

export {StyledLink}