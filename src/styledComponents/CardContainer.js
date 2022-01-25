import styled from "styled-components"


const Container = styled.div`
    margin: 20px 0px;
    overflow: auto;
    white-space:nowrap;
    width: auto;
    height: auto;
    color: ${props => props.theme === "dark" ? "white" : "black"};
    &::-webkit-scrollbar {
        height: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background: #dc3545; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#dc3545" : "black"}; 
        border-radius: 10px;
    }
`

const CardDescription = styled.div`
    display:none;
    position: absolute;
    top:0;
    start:0;
    padding: 4px;
    border-radius: 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    width: 100%;
    height: 100%;
`

const Card = styled.div`
    display:inline-block;
    white-space:normal;
    margin: 5px 6px;
    vertical-align:middle;
    white-space:normal;
    &:hover ${CardDescription} {
        display: flex;
        text-align: start;
      }
`

const Button = styled.button`
    background: ${props => props.theme === "light" ? "white" : "#131414"};
    color: #dc3545;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #dc3545;
    border-radius: 3px;
`


export { Card, Container, CardDescription, Button }