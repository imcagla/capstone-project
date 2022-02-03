import styled from "styled-components"
import { FaHeart, FaLinkedinIn } from "react-icons/fa"
import { ImBookmark } from "react-icons/im"
import { BsSunFill, BsTwitter, BsInstagram } from "react-icons/bs"
import { MdDarkMode } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

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
    transition: transform 3s ease-out;
   
`

export const DarkIcon = styled(MdDarkMode)`
    transition: transform 2s ease-out;
   
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