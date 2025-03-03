import styled from "styled-components";
import {motion} from "framer-motion"


export const Wrapper = styled.div`
    position: relative;
    display: inline-flex;

`

export const Content = styled(motion.div)`
    position: absolute;
    opacity: 0;
    color: black;
    padding: 12px 16px;
    white-space: nowrap;
    box-shadow: 0px 0px 8px #CCCCCC;
    border: 1px solid black;
    background-color: white;
    border-radius: 8px;
    bottom: 125%;
    left: -50%;
    font-family: "Manrope";
    font-weight: 500;
`


export const Trigger = styled.div`
    cursor: pointer;
    

    &:hover + ${Content} {
        opacity: 1;
        visibility: visible;
    }
`