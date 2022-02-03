import styled from "styled-components";
import { Button } from "./BaseStyleComponents";


export const SortFilterMainContainer = styled.div`
    text-align:center;
`

export const SortFilterGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 60% auto;
    background: ${props => props.theme === "dark" ? "#222831" : "rgb(221, 221, 221, 0.3)"};
    // border: 1px solid ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    align-items: center;
    padding: 10px 7%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.37);
    border-radius: 25px;
    @media only screen and (max-width: 960px) {
        grid-template-columns: 100%;
    }
`

export const GridContainer = styled.div`
    // background: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    padding: 20px;
    text-align: center;
`

export const FilterDateContainer = styled.div`
    display: grid;
    grid-gap: 10px 10px;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 8px 0;
`

export const FilterButtons = styled.button`
    background: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    color: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    padding: 5px 10px;
    outline: none;
    border: 0px;
    margin: 5px;
    border-radius: 5px;
    &:hover {
        background: ${props => props.theme === "dark" ? "rgb(221, 221, 221, 0.7)" : "rgb(34, 40, 49, 0.7)"};
    }
`

export const FilteredButtons = styled.button`
background: ${props => props.theme === "dark" ? "rgb(221, 221, 221, 0.7)" : "rgb(34, 40, 49, 0.7)"};
    color: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    padding: 5px 10px;
    outline: none;
    font-size: 13px;
    border: 0px;
    margin: 5px;
    border-radius: 5px;
    & > span {
        font-size: 15px;
        padding-left: 7px;
        &:hover {
            color: whitesmoke;
        }
    }
`

export const SearchButton = styled(Button)`
    padding: 15px 30px;
`

export const SortFilterTitle = styled.h5`
    margin-bottom: 20px;
    text-align: start;
`