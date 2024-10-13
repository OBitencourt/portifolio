import { Container, Typography, Box } from "@mui/material"

import styled from 'styled-components'

const Button = styled.button`
    background-color: rgba(25, 11, 40, 0.9);
    width: 40%;
    border: none;
    border-radius: 7px 7px 7px 7px / 12px 12px 12px 12px;
    cursor: pointer;
    color: white;   
    transition: all 200ms ease;
    display: flex;
    position: relative;
    
    &:hover {
        transform: scale(1.05);
        background-color: rgba(17, 7, 27, 0.9);
    }
    @media (max-width: 700px) {
        width: 70%;
    }
`

const Anchor = styled.a`
    width: 100%;
    background-color: transparent;
    display: block;
    padding: 12px;
    color: white;
    text-decoration: none;
`
const StyledSVG = styled.svg`
    fill: white; /* Cor do hover dos botões */
    width: 30px;
    height: 30px;
    margin-left: 5px;
    position: absolute;
    left: 50px;
    padding-top: 5px;

    @media (max-width: 700px) {
        left: 20px;
    }
    
`

const Contacts = () => {


    return (
        <>
        
            <Container 
                maxWidth='md'
                sx={{height: '90vh', paddingTop: 20, marginBottom: 10}}
                id="contacts"
            >
                <Typography
                    variant='h4'
                    fontWeight={300}
                    component='h2'
                    align='center'
                    sx={{color: 'white'}}
                >
                    Interessado no meu trabalho?
                </Typography>
                <Typography
                    variant='h6'
                    fontWeight={200}
                    component='h2'
                    align='center'
                    sx={{color: 'white'}}
                >
                    Entre em contato comigo!
                </Typography>
                <Box
                    sx={{
                        backgroundColor: 'white', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        marginTop: 2, 
                        padding: 2,
                        borderRadius: '20px 20px 20px 20px / 50px 50px 50px 50px'
                        
                    }}
                >
                    <Button>
                        <StyledSVG viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                            <path d="m80.667 14h-61.352c-2.934 0-5.315 2.325-5.315 5.188v61.617c0 2.867 2.381 5.195 5.315 5.195h61.352c2.936 0 5.333-2.328 5.333-5.195v-61.617c0-2.863-2.397-5.188-5.333-5.188zm-45.313 61.354h-10.684v-34.359h10.684zm-5.342-39.057c-3.423 0-6.19-2.774-6.19-6.194 0-3.415 2.767-6.189 6.19-6.189 3.415 0 6.189 2.774 6.189 6.189 0 3.42-2.774 6.194-6.189 6.194zm45.338 39.057h-10.667v-16.708c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998h-10.675v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z"/>
                        </StyledSVG>
                        <Anchor target="_blank" href="https://www.linkedin.com/in/arthur-bitencourt-vieira-silva-456443328/">
                            LinkedIn
                        </Anchor>
                    </Button>
                    <Button
                        style={{marginTop: 10, marginBottom: 10}}
                    >
                        <StyledSVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m18.403 5.633c-1.695-1.697-3.949-2.632-6.35-2.633-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488l-1.273 4.651 4.759-1.249c1.312.715 2.788 1.092 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977 0-2.398-.932-4.653-2.627-6.35m-6.35 13.812h-.003c-1.339-.001-2.652-.36-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282c-.747-1.188-1.141-2.561-1.141-3.971.002-4.114 3.349-7.461 7.465-7.461 1.993.001 3.866.778 5.275 2.188 1.408 1.411 2.184 3.285 2.183 5.279-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383-.13-.006-.28-.008-.429-.008-.15 0-.393.056-.599.28-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263"/>
                        </StyledSVG>

                        <Anchor target="_blank" href="https://w.app/FYbNe9">
                            Whatsapp
                        </Anchor>
                    </Button>
                    <Button>
                        <StyledSVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/>
                        </StyledSVG>
                        <Anchor target="_blank" href="https://github.com/OBitencourt">
                            Github
                        </Anchor>
                    </Button>
                    <Button style={{marginTop: 10}}>
                        <StyledSVG  viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg">
                            <path d="m502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7v204.5c0 26.5-21.5 48-48 48h-416c-26.5 0-48-21.5-48-48v-204.4c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zm-246.3 129.2c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48h-416c-26.5 0-48 21.5-48 48v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                        </StyledSVG>
                        <Anchor target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=arthursilvadevelop@gmail.com&su=Boa%20tarde,%20Arthur!&body=Olá,%20gostaria%20de%20entrar%20em%20contato!">
                            Email
                        </Anchor>
                    </Button>
                </Box>
            </Container>
        </>
    )
}


export default Contacts