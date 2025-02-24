import styled from "styled-components";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
    font-family: "Manrope";
    font-size: 4rem;
    font-weight: 500;
    margin: 0px 0px 50px 0px;
`

export const TechsDiv = styled.div`
    background: rgba( 255, 255, 255, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.27 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    justify-content: space-between;
    padding: 140px 70px;
`

export const Info = styled(Typography)`
    font-family: "Manrope";
    font-size: 3rem;
    font-weight: 400;
    width: 40%;
`