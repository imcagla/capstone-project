import styled from "styled-components";
import Table from "rc-table";


export const StyledTable = styled(Table)`
    background-color: ${props => props.theme === "dark" ? "black": "gray"}
`