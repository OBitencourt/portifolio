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
    background-color: none;
    background: none;
    border: 1px solid #CCCCCC;
    width: 30%;
    font-family: "Manrope";
    color: #5C3E86;
    font-size: 1.8rem;
    padding:  16px;
    border-radius: 14px;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #F1F1F1;
    }
`

