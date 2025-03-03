import styled from "styled-components";

export const Content = styled.div<{ isActive: boolean}>`
    width: 20%;
    height: 80px;
    background-color: #76328E;
    font-family: "Manrope";
    border-radius: 8px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 24px;
    color: white;
    font-weight: 500;
    position: absolute;
    bottom: 2%;
    right: 2%;
    margin-right: ${({isActive}) => (isActive ? "0" : "-1000px")};
    transition: all 500ms ease-in-out;
`;
