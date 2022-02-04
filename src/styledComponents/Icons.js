import styled from "styled-components"
import { FiLogOut } from "react-icons/fi"
import { ImBookmark } from "react-icons/im"
import { MdDarkMode } from "react-icons/md"
import { HiMail, HiMenu } from "react-icons/hi"
import { FaHeart, FaLinkedinIn, FaTimes } from "react-icons/fa"
import { BsMoonStars, BsSearch, BsGithub, BsSunFill, BsTwitter, BsInstagram } from "react-icons/bs"


export const SearchIcon = styled(BsSearch)`
    box-sizing: border-box;
    padding: 5px;
    position: absolute;
    top: 10%;
    right: 10%;
    border-radius: 50%;
    color:black;
    text-align: center;
    font-size: 35px;
    transition: all 1s;
`

export const MoonLogo = styled(BsMoonStars)`
    font-size: 40px;
    color: white;
    transform: translate3D(0, 180px, 0);
    animation: grow 4s ease-out infinite;
    @keyframes grow {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.15) rotate(-5deg);
          opacity: 1;
          fill: #FFF47D;
        }
        100% {
          transform: scale(1);
        }
      }   
`

export const MenuOpenIcon = styled(HiMenu)`
    font-size: 40px;
    margin-bottom: 15px;
`
export const MenuCloseIcon = styled(FaTimes)`
    font-size: 40px;
    margin-bottom: 15px;
`

export const MailIcon = styled(HiMail)`
    font-size: 30px;
    margin: 5px;
`

export const LinkedinIcon = styled(FaLinkedinIn)`
    font-size: 30px;
    margin: 5px;
`

export const GithubIcon = styled(BsGithub)`
    font-size: 30px;
    margin: 5px;
`

export const FavoriteIcon = styled(FaHeart)`
    font-size: 25px;
    position: ${props => props.loc === "table" ? "none" : "absolute"};
    top: 85%;
    left: 60%;
    color: ${props => props.isfav ? "#F05454" : "gray"};
    cursor: pointer;
`

export const WatchedIcon = styled(ImBookmark)`
    font-size: 25px;
    position: ${props => props.loc === "table" ? "none" : "absolute"};
    top: 85%;
    left: 80%;
    color: ${props => props.isseen ? "#F05454" : "gray"};
    cursor: pointer;
`

export const LightIcon = styled(BsSunFill)`
    transition: transform 1s ease-out;
   
`

export const DarkIcon = styled(MdDarkMode)`
    transition: transform 1s ease-out;
   
`

export const LogOutIcon = styled(FiLogOut)`
    cursor: pointer;
    font-size: 21px;
`

export const TwitterIcon = styled(BsTwitter)`
    color: ${props => props.theme === "light" ? "rgb(34, 40, 49)" : "rgb(221, 221, 221)"};
    font-size: 20px;
    margin: 5px;
`


export const InstagramIcon = styled(BsInstagram)`
    color: ${props => props.theme === "light" ? "rgb(34, 40, 49)" : "rgb(221, 221, 221)"};
    font-size: 20px;
    margin: 5px;
`