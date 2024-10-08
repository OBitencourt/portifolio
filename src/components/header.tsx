
import { Container } from '@mui/material'
import styled from 'styled-components'


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
    return (
        <>
            <StyledHeader>
                <Container maxWidth='xs'
                    sx={{display: 'flex', justifyContent: 'center'}}
                >
                    <StyledButton>
                        <p>Sobre</p>
                    </StyledButton>
                    <StyledButton>
                        <p>Serviços</p>
                    </StyledButton>
                    <StyledButton>
                        <p>Techs</p>
                    </StyledButton>
                    <StyledButton>
                        <p>Contatos</p>
                    </StyledButton>
                </Container>
            </StyledHeader>
        </>
    )
}

export default Header