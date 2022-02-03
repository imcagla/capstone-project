import styled from "styled-components";

export const DetailGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 30% 70%;
    text-align: start;
    & > .detail-description {
        margin-left: 20px;
        margin-top: 50px;
        & > p {
            margin-top: 50px;
        }
        & > h6 {
            color: gray;
        }
        & > ul {
            display: flex;
            list-style: none;
            float: right;
            & > li {
                margin: 15px;
            }
        }
    }
    & > img {
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        @media screen and (max-width: 900px) {
            margin: auto;
        }
    }
    & > div {
        & > h5 {
            margin-top: 30px;
            text-align:start;
        }
    }
    & > .review-part {
        background-color: ${props => props.theme ==="dark" ? "rgb(48, 71, 94, 0.2)": "rgb(240, 84, 84, 0.2)"};
        border-radius: 25px;
        padding: 0 15px; 
        margin: 20px 20px 20px 0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.37);
        & > p{
            font-size: 12px;
            & > span {
                padding: 5px 10px;
                border-radius: 50%;
                background-color: whitesmoke;
                border: 1px solid gray;
                font-weight: bold;
                margin-right: 10px;
                font-size: 15px;
                color: gray;
            }
        }
        
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: 100%;
        text-align: center;
    }
`

export const CastCard = styled.div`
    position:block;
    display:inline-block;
    white-space:normal;
    margin: 6px;
    vertical-align: top;
    white-space:normal;
    align-items: start;
`

export const CastCardDescription = styled.div`
   max-width: 100px;
   font-size: 12px;
   & > .char-name {
       color: gray;
   }
`
