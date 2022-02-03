import styled from "styled-components"


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

export const CardDescription = styled.div`
    display:none;
    position: absolute;
    top:0;
    left: 0;
    padding: 4px;
    border-radius: 7px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    width: 100%;
    height: 100%;
    & > ul {
        position: absolute;
        left: -20px;
        display: inline-block;
        list-style: none;
        font-weight: bold;
        & > li {
            font-size: 12px;
            color: gray;
        }
    }
`

export const Card = styled.div`
    position:relative;
    display:inline-block;
    white-space:normal;
    margin: 5px 10px;
    vertical-align:middle;
    white-space:normal;
    &:hover ${CardDescription} {
        display: flex;
        text-align: start;
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

export const CardImg = styled.img`
    border-radius: 7px;
    object-fit: cover;
`
