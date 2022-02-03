import styled from "styled-components";


export const StyledSelect = styled.select`
    color: #222831;
    padding: 5px 10px;
    width: 100%;
    border-radius: 10px;
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
        background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
        border-radius: 10px;
        transition: all 0.2s ease-out;
    }
    
`


export const DropdownList = styled.ul`
    display:none;
    list-style: none;
    position: absolute;
    top: 90%;
    left: 0%;
    background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
    width: 100%;
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    &>li {
        color: ${props => props.theme === "dark" ? "#DDDDDD" : "whitesmoke"};
        padding: 7px;
        &:hover {
            background-color: ${props => props.theme === "dark" ? "#222831" : "white"};
            cursor: pointer;
            border-radius: 5px;
        }
    }
    
`


export const Dropdown = styled.div`
    position: relative;
    color: #222831;
    padding: 5px 30px;
    margin-top:18px;
    color: ${props => props.theme === "dark" ? "white" : "black"};
    width: 100%;
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
        background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
        border-radius: 5px;
        transition: all 0.2s ease-out;
    }
    &:hover ${DropdownList} {
        display: block;
    }
`