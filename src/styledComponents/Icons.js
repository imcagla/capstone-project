import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import { ImBookmark } from "react-icons/im"
import { BsSunFill } from "react-icons/bs"
import { MdDarkMode } from "react-icons/md"


const FavoriteIcon = styled(FaHeart)`
    font-size: 25px;
    position: absolute;
    top: 85%;
    left: 60%;
    color: ${props => props.isFav ? "#dc3545" : "white"}
`

const WatchedIcon = styled(ImBookmark)`
    font-size: 25px;
    position: absolute;
    top: 85%;
    left: 80%;
    color: ${props => props.isSeen ? "#dc3545" : "white"}
`

const LightIcon = styled(BsSunFill)`
    transition: transform 3s ease-out;
    &:hover {
        transform: rotate(360deg);
        color: white;
    }
`

const DarkIcon = styled(MdDarkMode)`
    transition: transform 2s ease-out;
    &:hover {
        transform: rotate(360deg);
        color: white;
    }  
`

export {FavoriteIcon, WatchedIcon, LightIcon, DarkIcon}