import styled from "styled-components";


export const MainContainer = styled.div`
    text-align: start;
    padding: 10px 50px 10px 50px;
    margin: auto;
`

export const Container = styled.div`
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
        background: #F05454; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#F05454" : "black"}; 
        border-radius: 10px;
    }
`

export const Button = styled.button`
    background: ${props => props.theme === "light" ? "white" : "#14171c"};
    color: #F05454;
    font-size: 1em;
    padding: 0.25em 1.5em;
    border: 2px solid #F05454;
    border-radius: 20px;
    transition: 0.3s;
    &:hover{
        background: #F05454;
        color: ${props => props.theme === "light" ? "white" : "#14171c"};
    }
`

export const Alert = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    align-items: center;
    background-color: rgb(221, 221, 221, 0.5);
    color: #222831;
    font-weight: bold;
    font-size: 18px;
    padding: 50px;
    margin: 50px 30%;
    border-radius: 20px;
    box-shadow: 0 0 5px rgb(34, 40, 49, 0.3);
`