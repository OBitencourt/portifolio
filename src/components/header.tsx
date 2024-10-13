import { Container } from '@mui/material'
import styled from 'styled-components'
import React from 'react';

const StyledHeader = styled.header`
    width: 50%;
    height: 50px;
    background-color: white;
    position: 'relative';
    border-radius: 55px 55px 55px 55px;
    padding: 5px;
    display: flex;
    align-items: end;
    border: 1px solid #b0b0b0;
`
const StyledButton = styled.button`
    background-color: transparent;
    margin: 0px 3px 0px;
    border-radius: 55px 55px 55px 55px;
    transition: all 250ms ease-out;
    color: #190b28;
    width: 400px;
    border: none;
    cursor: pointer;
    padding: 10px;

    &:hover {
        background-color: rgba(25, 11, 40, 0.9);
        border: 1px solid #b0b0b0;
        color: white;
        transform: scale(1.05);
    }

    p {margin: 0}
`

const StyledSVG = styled.svg`
    fill: rgba(25, 11, 40, 0.9); /* Cor do hover dos botões */
    width: 40px;
    height: 40px;
    margin-left: 5px;
    padding: 5px;
    position: absolute;
`

const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <StyledHeader>
            <StyledSVG viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m528 0h-480c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48v-320c0-26.5-21.5-48-48-48zm-16 352h-448v-288h448z"/>
            </StyledSVG>

            <Container maxWidth='xs' sx={{ display: 'flex' }}>
                <StyledButton onClick={() => scrollToSection('home')}>
                    <p>Home</p>
                </StyledButton>
                <StyledButton onClick={() => scrollToSection('about')}>
                    <p>Sobre</p>
                </StyledButton>
                <StyledButton onClick={() => scrollToSection('services')}>
                    <p>Serviços</p>
                </StyledButton>
                <StyledButton onClick={() => scrollToSection('techs')}>
                    <p>Techs</p>
                </StyledButton>
                <StyledButton onClick={() => scrollToSection('contacts')}>
                    <p>Contatos</p>
                </StyledButton>
            </Container>

            
        </StyledHeader>
    )
}

export default Header
