import styled from "styled-components";


export const ProfileGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 30% 70%;
    text-align: center;
    align-items:center;
    margin-top: 30px;
    @media only screen and (max-width: 960px) {
        grid-template-columns: auto;
    }
`

export const ProfileInfoGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto;
    align-items: center;
    @media only screen and (max-width: 960px) {
        grid-template-columns: 40% 60%;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: auto;
        justify-content:center;
    }
    & > div {
        & > .username {
            font-weight: bold;
        }
        & > .join-date {
            color: gray;
            font-size: 13px;
        }
        & > .list {
            margin-top: 20px;
            list-style: none;
            & > li {
                margin-top: 15px;
                & > .movie-counts {
                    font-weight: bold;
                    font-size: 20px;
                    color: ${props => props.theme ==="dark" ? "rgb(34, 40, 49)": "rgb(221, 221, 221)"};;
                    border: 2px ridge rgb(240, 84, 84, 0.8);
                    background-color: ${props => props.theme ==="light" ? "rgb(34, 40, 49)": "rgb(221, 221, 221)"};
                    padding: 3px 10px;
                    border-radius: 50%;
                }
            }
        }

    }
`

export const ProfileInfo = styled.div`
    text-align: start;
    
`


export const TableContainer = styled.div`
    background-color: ${props => props.theme ==="dark" ? "rgb(34, 40, 49, 0.2)": "rgb(221, 221, 221, 0.2)"};
    border-radius: 25px;
    padding: 30px;
    overflow-x: auto;
    @media only screen and (max-width: 960px) {
        margin-top: 30px;
    }
`

export const TableDropdownContainer = styled.div`
    padding-bottom: 20px;
    width: 50%;
    text-align: start;

`


export const TableStyled = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color: ${props => props.theme === "light" ? "#30475E" : "#DDDDDD"};
    font-size: 13px;

    & > tr {
        transition-duration: .5s;
        &:hover {
                background-color: rgb(255, 244, 125) !important;
                color: #30475E;
            }
        &:nth-child(even) {
            background-color: ${props => props.theme === "dark" ? "#30475E" : "#DDDDDD"};
        }
        & > td {
            border: 1px solid ${props => props.theme === "dark" ? "#222831" : "#D0DDDD"};
            text-align: left;
            padding: 8px;
            
        }
        & > th {
            border: 1px solid ${props => props.theme === "dark" ? "#222831" : "#D0DDDD"};
            background-color: ${props => props.theme === "dark" ? "#222831" : "#F6A9A9"};
            text-align: left;
            padding: 8px;
        }
    }
`