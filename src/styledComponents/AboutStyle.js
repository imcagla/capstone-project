import styled from "styled-components";


export const AboutContainer = styled.div`
    margin-top: 50px;
    align-text: center;
    background-color: ${props => props.theme ==="light" ? "whitesmoke" : "#222831"};
    color: ${props => props.theme ==="dark" ? "whitesmoke" : "#222831"};
    padding: 30px;
    border-radius: 10px;
    & > ul {
        list-style: circle;
    }
`