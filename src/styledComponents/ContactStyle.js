import styled from "styled-components";


export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-gap: 20px;
    justify-content: center;
    @media only screen and (max-width: 450px ){
        grid-template-columns: auto;
    }
`

export const ContactContainer = styled.div`
    text-align:center;
    justify-content:center;
    margin: 15vh 0 15vh 0;
    background-color: ${props => props.theme ==="light" ? "whitesmoke" : "#222831"};
    color: ${props => props.theme ==="dark" ? "whitesmoke" : "#222831"};
    padding: 30px;
    border-radius: 10px;
`

export const ContactColumn = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > ul {
        list-style: none;
        display: flex;
        & > li {
            padding-right: 20px;
        }
    }
`