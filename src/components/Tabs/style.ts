import styled from 'styled-components'


export const Content = styled.div`
    width: 40%;
`

export const ButtonsWrapper = styled.div`
    width: 90%;
    border-bottom:2px solid #CCCCCC;
`

export const TabButton = styled.button<{ $active: boolean }>`
    background-color: ${({ $active }) => ($active ? "#CCCCCC" : "transparent")};
    border: none;
    font-family: "Manrope";
    padding: 20px 40px;
    font-size: 1.8rem;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ $active }) => ($active ? "#CCCCCC" : "#D9D9D9")};
    }

`

export const IconBox = styled.div`
    border-radius: 18px;
    background-color: none;
    border: 2px solid #9C60B6;
    padding: 30px;
    display: flex;
    align-items: center;
`