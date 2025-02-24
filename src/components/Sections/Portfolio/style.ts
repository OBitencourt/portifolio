import styled from "styled-components";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
    font-family: "Manrope";
    font-size: 4rem;
    font-weight: 500;
    margin: 0px 0px 50px 0px;
`

export const Content = styled.div`
    padding: 20px;
    width: 30%;
    background-color: #F1F1F1;
    border-radius: 30px;
    box-shadow:  -20px 20px 60px #bebebe,
             20px -20px 60px #ffffff;
    display: flex;
    flex-direction: column;
`
export const GitButton = styled.button`
    background-color: black;
    display: flex;
    align-items: center;
    border-radius: 12px;
    padding: 10px 20px;
    align-self: flex-end;
    font-family: "Space Grotesk";
    font-size: 1rem;
    color: white;
    margin-left: 16px;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color:rgb(27, 27, 27);
    }
`

export const DeployButton = styled.button`
    border-radius: 12px;
    padding: 25px 40px;
    align-self: flex-end;
    font-family: "Space Grotesk";
    font-size: 1rem;
    border: none;
    transition: all 150ms ease-in-out;

    &:hover {
        background-color:rgb(196, 196, 196);
    }
`  