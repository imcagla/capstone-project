import styled from "styled-components"

const Container = styled.div`
    margin: 20px 50px;
    overflow: auto;
    white-space:nowrap;
    width: auto;
    height: auto;
    overflow-y: none;
`

const Card = styled.div`
    background-color: ${props => props.theme === "light" ? "white": "gray"};
    border: 2px solid ${props => props.theme === "light" ? "tomato": "black"};
    border-radius: 5px;
    color: ${props => props.theme === "light" ? "black": "white"};
    display:inline-block;
    white-space:normal;
    margin: 0 5px;
    padding: 10px;
    width: 230px;
    height: 360px;
    vertical-align:top;
    white-space:normal;
`

export {Card, Container}