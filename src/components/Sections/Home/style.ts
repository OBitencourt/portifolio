import styled from "styled-components";

export const Name = styled.h2`
    font-family: "Manrope";
    font-weight: 400;
    font-size: 3rem;
    color: #464646;
    margin-bottom: 0;
`

export const MainPhrase = styled.h1`
    font-family: "Manrope";
    font-weight: 500;
    color: black;
    font-size: 6rem;
    width: 60%;
    line-height: 95px;
    margin-top: 20px;

    span:first-of-type {
        display: inline-block;
        background-color: black;
        color: white;
        padding: 28px;
        border-radius: 8.53px;
    }

    span:last-of-type {
        color: #76328E;
        font-weight: 600;
    }
`

export const MainButton = styled.button`
    background-color: #76328E;
    border: none;
    padding: 30px 80px;
    color: white;
    font-family: "Inter";
    border-radius: 100px;
    font-size: 1.5rem;
    cursor: pointer;
    border: 4px solid white;
    transition: all 150ms ease-in-out;
    &:hover {
        box-shadow: 0px 0px 12px  #76328E;

    }
`

export const SecondaryButton = styled.button`
    background-color: white;
    padding: 30px 50px;
    color: black;
    font-family: "Space Grotesk";
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    border-radius: 100px;
    border: none;
    margin-left: 20px;
    display: inline-flex;
    align-items: center;
    transition: all 150ms ease-in-out;

    &:hover {
        background-color: #F1F1F1;
    }
`