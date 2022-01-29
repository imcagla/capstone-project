import styled from "styled-components";


export const SortFilterGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 60% auto;
    padding: 10px 7%;
    position: none;
    top: 0;
    z-index: 999;
    
`

export const GridContainer = styled.div`
    background: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    border: 1px solid ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
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

