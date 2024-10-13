import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styled from 'styled-components'
import {Container} from '@mui/material'

const Span = styled.button`
    color: #41235f;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 17px;
    border-radius: 55px 55px 55px 55px;
    transition: all 250ms ease;

    &:hover {
        background-color: rgba(203, 198, 200, 0.05);
        padding: 10px;
    }
`

const Home = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <>
            <Container
                maxWidth='md'
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}
                id="home"
            >

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Image  
                        src="../images/undraw_programming_re_kg9v.svg"
                        alt="Developer"
                        width={250}
                        height={250}
                    />
                    <Typography 
                        variant="h1" 
                        component='h2'
                        fontSize={40}
                        color="white"     
                        gutterBottom          
                        align="center"   
                    >
                        Arthur Bitencourt Vieira Silva
                    </Typography>
                    <Typography 
                        variant="body1" 
                        component='h4'
                        gutterBottom
                        color="#c4c2c2"                   
                    >
                        Fullstack Developer
                    </Typography>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, color: 'white' }}
                    >
                        <Typography
                            align="center"
                        >
                            Esse site foi desenvolvido tecnologias presentes na página <Span onClick={() => scrollToSection('techs')}>Techs</Span>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            
        </>
    )
}

export default Home