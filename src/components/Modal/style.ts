import styled from "styled-components";

export const Backdrop = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({isActive}) => (isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.div`
    background-color: white;
    box-shadow: 0px 0px 10px #A4A4A4;
    width: 30%;
    height: 30vh;
    margin: 0 auto;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: relative;
`;

export const Title = styled.h1`
    font-family: "Manrope";
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 12px;
    margin-bottom: 16px;
    margin-top: 0;
    border-bottom: 2px dashed #CCCCCC;

`

export const Info = styled.p`
    font-family: "Manrope";
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0;
`


export const GotItButton = styled.button`
    font-weight: 400;
    font-size: 1rem;
    font-family: "Manrope";
    background-color: black;
    border-radius: 16px;
    padding: 24px 32px;
    color: white;
    align-self: flex-end;
    border: none;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color:rgba(0, 0, 0, 0.75);
    }
`