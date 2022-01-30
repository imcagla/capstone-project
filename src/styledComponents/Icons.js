import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import { ImBookmark } from "react-icons/im"
import { BsSunFill } from "react-icons/bs"
import { MdDarkMode } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"


const FavoriteIcon = styled(FaHeart)`
    font-size: 25px;
    position: ${props => props.loc === "table" ? "none":"absolute" };
    top: 85%;
    left: 60%;
    color: ${props => props.isFav ? "#F05454" : "white"}
`

const WatchedIcon = styled(ImBookmark)`
    font-size: 25px;
    position: ${props => props.loc === "table" ? "none":"absolute" };
    top: 85%;
    left: 80%;
    color: ${props => props.isSeen ? "#F05454" : "white"}
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

const LogOutIcon = styled(FiLogOut)`
    cursor: pointer;
    font-size: 21px;
`

export {FavoriteIcon, WatchedIcon, LightIcon, DarkIcon, LogOutIcon}