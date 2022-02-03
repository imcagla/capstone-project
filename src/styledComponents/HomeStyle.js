import styled from "styled-components";


export const ButtonGroupContainer = styled.div`
    display: flex;
`

export const ButtonGroupRow = styled.div`
    margin-left:auto;
    & > .btn-week {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        background-color: ${props => props.trend === "week" ? "#F05454" : (props.theme === "dark" ? "#14171c": "white")};
        color: ${props => props.trend === "week" ? (props.theme === "dark" ? "#14171c": "white") : "#F05454"};
        &:hover {
            background-color: ${props => props.trend === "day" && "#F05454" };
            color: ${props => props.trend === "day" && (props.theme === "dark" ? "#14171c": "white") };
        }

    }

    & > .btn-day {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        background-color: ${props => props.trend === "day" ? "#F05454" : (props.theme === "dark" ? "#14171c": "white")};
        color: ${props => props.trend === "day" ? (props.theme === "dark" ? "#14171c": "white") : "#F05454"};
        &:hover {
            background-color: ${props => props.trend === "week" && "#F05454"};
            color: ${props => props.trend === "week" && (props.theme === "dark" ? "#14171c": "white")};
        }
    }
`