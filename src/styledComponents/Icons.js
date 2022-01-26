import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import { ImBookmark } from "react-icons/im"

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

export {FavoriteIcon, WatchedIcon}