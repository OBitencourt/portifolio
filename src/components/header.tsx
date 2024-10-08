
import { Container } from '@mui/material'
import styled from 'styled-components'
import React from 'react';
import { useRouter } from 'next/router'


const StyledHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: #190b28;
`
const StyledButton = styled.button`
    background-color: transparent;
    margin: 7px 3px 0px;
    border-radius: 55px 55px 55px 55px;
    transition: all 250ms ease-out;
    color: #c4c2c2;
    width: 400px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgba(203, 198, 200, 0.05);
        color: white;
        transform: scale(1.05);
    }
`



const Header = () => {

    const router = useRouter()

    const handleNav = (route: string) => {
        router.push(route)
    }

    return (
        <>
            <StyledHeader>
                <Container maxWidth='xs'
                    sx={{display: 'flex', justifyContent: 'center'}}
                >
                    <StyledButton
                        onClick={() => handleNav('/')}
                    >
                        <p>Home</p>
                    </StyledButton>
                    <StyledButton
                        onClick={() => handleNav('/about')}
                    >
                        <p>Sobre</p>
                    </StyledButton>
                    <StyledButton
                        onClick={() => handleNav('/services')}
                    >
                        <p>Serviços</p>
                    </StyledButton>
                    <StyledButton
                        onClick={() => handleNav('/techs')}
                    >
                        <p>Techs</p>
                    </StyledButton>
                    <StyledButton
                        onClick={() => handleNav('/contacts')}
                    >
                        <p>Contatos</p>
                    </StyledButton>
                </Container>
            </StyledHeader>
        </>
    )
}

export default Header