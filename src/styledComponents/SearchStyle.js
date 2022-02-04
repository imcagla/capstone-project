import styled from "styled-components"


export const Input = styled.input`
    border: 1px solid ${props => props.theme ==="dark" ? "#F05454" : "gray"};
    background-color: ${props => props.theme === "dark" ? "#14171c" : "white"};
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
    margin-top: 50px;
`

export const Form = styled.form`
    position: relative;
    top: 50%;
    left: 10%;
    transform: translate(-10%,0%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    padding: 5px;
    &:hover {
        width: 200px;
        cursor: pointer;
    }
    @media only screen and (max-width: 960px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%,0%);
    }
`