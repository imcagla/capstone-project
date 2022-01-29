import styled from "styled-components";


export const StyledSelect = styled.select`
    color: #222831;
    padding: 5px 10px;
    width: 100%;
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
        background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
        border-radius: 5px;
        transition: all 0.2s ease-out;
    }
`
