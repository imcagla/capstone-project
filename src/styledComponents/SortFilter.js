import styled from "styled-components";


export const SortFilterGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 30% 60% auto;
    padding: 10px 7%;
    position: none;
    top: 0;
    z-index: 999;
`

export const GridContainer = styled.div`
    background-color: ${props => props.theme === "dark" ? "black" : "white"};
    border: 2px solid #dc3545;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`

export const FilterDateContainer = styled.div`
    display: grid;
    grid-gap: 10px 10px;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 8px 0;
`

