import styled from "styled-components"

export const Input = styled.input`
    border: 1px solid ${props => props.theme ==="dark" ? "#F05454" : "gray"};
    background-color: ${props => props.theme === "dark" ? "#131414" : "white"};
    color: ${props => props.theme === "dark" ? "white" : "black"};
    width: 100%;
    height: 35px;
    padding: 15px;
    border-radius: 20px;
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme ==="dark" ? "#F05454" : "gray"};
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#F05454" : "black"};
    };
`

export const PaginationContainer = styled.div`
    text-align:center;
`
