import styled from "styled-components";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
    font-family: "Manrope";
    font-size: 4rem;
    font-weight: 500;
    margin: 0px 0px 50px 0px;
`

export const TechsDiv = styled.div`
    background:rgba(241, 241, 241, 0.78);
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 #CCCCCC;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 48px;
    border: 1px solid #CCCCCC;
    display: flex;
    justify-content: space-around;
    padding: 120px 70px;
`

export const Info = styled(Typography)`
    font-family: "Manrope";
    font-size: 3rem;
    font-weight: 400;
    width: 40%;
`

