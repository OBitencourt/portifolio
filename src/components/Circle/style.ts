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
    animation: floating 5s infinite ease-in-out alternate;
    z-index: -1;

    @keyframes floating {
        from {
            transform: translate(-50%, -50%) translateY(0px);
        }
        to {
            transform: translate(-50%, -50%) translateY(20px);
        }
    }
`