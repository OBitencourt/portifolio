import { Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled(Typography)`
    font-family: "Manrope";
    font-size: 4rem;
    font-weight: 500;
    margin: 0px 0px 50px 0px;

`
export const SecondTitle = styled(Typography)`
    font-family: "Manrope";
    font-size: 3.5rem;
    font-weight: 400;
    margin: 0px 0px 50px 0px;
    
`


export const StyledButton = styled.button`
    background-color: #76328E;
    background: #76328E;
    border: none;
    width: auto;
    font-family: "Manrope";
    color: white;
    font-size: 1.8rem;
    padding:  20px 64px;
    border-radius: 14px;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`

