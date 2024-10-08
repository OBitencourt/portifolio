
import { Container, Box, Typography } from "@mui/material"
import Image from "next/image";

const About = () => {
    return (
        <>
            <Container
                maxWidth='md'
                sx={{display: 'flex', marginTop: 5, height: '100vh'}}
            >
                <Box
                    style={{backgroundColor: '#25143a', width: '50%', height: '400px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', padding: '20px',}}
                >
                    <h1 style={{color: 'white', fontWeight: 400, margin: '10px 0px 0px 0px'}}>Arthur Bitencourt</h1>
                    <h2 style={{color: 'white', fontWeight: 200, margin: '0px 0 10px'}}>Frontend Developer</h2>
                    <Typography
                        component='h3'
                        variant='body2'
                        fontSize={17}
                        sx={{color: 'white'}}
                    >
                        <Box
                            sx={{backgroundColor: '#190b28', height: '300px', borderRadius: 2, padding: 2}}
                        >

                        Resumo
                        </Box>

                    </Typography>
                </Box>
                <Box>                    
                    <Image  
                        src="/images/eu.png"
                        alt="Developer"
                        width={400}
                        height={400}
                        style={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}
                    />
                </Box>
            </Container>
        </>
    )
}

export default About