import styled from "styled-components"



export const CardDescription = styled.div`
    display:none;
    position: absolute;
    top:0;
    left: 0;
    padding: 4px;
    border-radius: 7px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    width: 100%;
    height: 100%;
    & > ul {
        position: absolute;
        left: -20px;
        display: inline-block;
        list-style: none;
        font-weight: bold;
        & > li {
            font-size: 12px;
            color: gray;
        }
    }
`

export const Card = styled.div`
    position:relative;
    display:inline-block;
    white-space:normal;
    margin: 5px 10px;
    vertical-align:middle;
    white-space:normal;
    &:hover ${CardDescription} {
        display: flex;
        text-align: start;
      }
`

export const CardImg = styled.img`
    border-radius: 7px;
    object-fit: cover;
`
