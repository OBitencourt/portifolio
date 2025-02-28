import styled from "styled-components";



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
    z-index: -1;
    animation: floating 4s ease-in-out infinite alternate;

    @keyframes floating {
        0% {
            transform: translate(-50%, -30%) ;
        }
        100% {
            transform: translate(-50%, -50%) ;
        }
    }
`