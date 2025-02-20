import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 97%;
    height: 130px;
    background-color: white;
    padding: 8px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    border-radius: 12px;
`

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 30%;
`

export const HeaderButtons = styled.button`
    border: none;
    background: none;
    font-family: "Space Grotesk";
    font-size: 2.1rem;
    transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    font-weight: 400;

    &:hover {
        color: #76328E;
        font-weight: 600;
        transform: scale(1.05);
    }

`