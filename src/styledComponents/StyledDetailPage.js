import styled from "styled-components";


export const DetailGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 30% 70%;
    text-align: start;
    & > .detail-description {
        margin-top: 50px;
        & > p {
            margin-top: 50px;
        }
        & > h6 {
            color: gray;
        }
    }
    & > img {
        width: 100%;
    }
`

export const CastCard = styled.div`
    position:block;
    display:inline-block;
    white-space:normal;
    margin: 6px;
    vertical-align:middle;
    white-space:normal;
    align-items: start;
`

export const CastCardDescription = styled.div`
   max-width: 100px;
   font-size: 12px;
`