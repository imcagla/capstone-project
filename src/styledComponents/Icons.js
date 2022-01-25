import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import { ImBookmark } from "react-icons/im"

const FavoriteIcon = styled(FaHeart)`
    font-size: 25px;
    position: absolute;
    top: 85%;
    left: 60%;
`

const WatchedIcon = styled(ImBookmark)`
    font-size: 25px;
    position: absolute;
    top: 85%;
    left: 80%;
`

export {FavoriteIcon, WatchedIcon}