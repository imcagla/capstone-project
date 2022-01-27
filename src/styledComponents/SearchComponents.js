import styled from "styled-components"

const Input = styled.input`
    border: 1px solid ${props => props.theme ==="dark" ? "#dc3545" : "gray"};
    background-color: ${props => props.theme === "dark" ? "#131414" : "white"};
    color: ${props => props.theme === "dark" ? "white" : "black"};
    width: auto;
    height: 35px;
    padding: 15px;
    border-radius: 20px;
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme ==="dark" ? "#dc3545" : "gray"};
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#dc3545" : "black"};
    };
`

export {Input}