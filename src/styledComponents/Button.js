import styled from "styled-components"

const Button = styled.button`
    padding: 20px;
    background-color: ${props => props.theme === "light" ? "red" : "black"};
    color: pink;
`

export {Button}