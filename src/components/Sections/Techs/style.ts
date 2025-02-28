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
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.27 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
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
export const CirclesContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -1;
`

export const Circle = styled.div<{ size: string; color: string; top: string; left: string }>`
    position: absolute;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background-color: ${(props) => props.color};
    border-radius: 50%;
    opacity: 0.65;
    filter: blur(20px);
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    transform: translate(-50%, -50%);
    animation: floating 5s infinite ease-in-out alternate;

    @keyframes floating {
        from {
            transform: translate(-50%, -50%) translateY(0px);
        }
        to {
            transform: translate(-50%, -50%) translateY(20px);
        }
    }
`