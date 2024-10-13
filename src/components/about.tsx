
import { Container, Box, Typography } from "@mui/material"
import Image from "next/image";

const About = () => {
    return (
        <>
            <Container
                maxWidth='lg'
                sx={{display: 'flex', marginTop: 5, height: '100vh', paddingTop: 12}}
                id="about"
            >
                <Box
                    style={{backgroundColor: '#25143a', width: '100%', height: '400px', borderRadius: '20px / 30px', padding: '10px', position: 'relative', border: '1px solid #110122'}}
                >
                    <h1 style={{color: 'white', fontWeight: 400, margin: '10px 0px 0px 20px'}}>Arthur Bitencourt</h1>
                    <h2 style={{color: 'gray', fontWeight: 300, margin: '0px 0 10px 19px'}}>Fullstack Developer</h2>
                    <Typography
                        component='h3'
                        variant='body2'
                        fontSize={17}
                        sx={{color: 'white'}}
                    >
                        <Box
                            sx={{backgroundColor: '#110122', height: '270px', borderRadius: '10px / 20px', width: '60%', padding: 2, border: '1px solid white'}}
                        >

                            <Typography
                                variant='h6'
                                component='h3'
                                fontWeight={200}
                                sx={{marginLeft: '5px'}}
                            >
                                Resumo:
                            </Typography>
                            <Typography
                                variant='body1'
                                component='h3'
                                fontWeight={200}
                                sx={{marginLeft: '5px', marginTop: 2}}
                            >
                                Olá, sou Arthur Bitencourt Vieira Silva, tenho 17 anos e sou apaixonado por desenvolvimento web desde 2023. Ao longo desse tempo, me aprofundei tanto no frontend quanto no backend, trabalhando com ferramentas como React, Next.js, SCSS, HTML, CSS, além de bibliotecas de estilização. No backend, utilizo Node.js, MongoDB e sigo a arquitetura MVC. Atualmente, estou envolvido em alguns projetos pessoais, mas também estou disponível para trabalhos como freelancer. Se você está procurando um desenvolvedor dedicado e criativo, sinta-se à vontade para entrar em contato!
                            </Typography>
                        </Box>

                    </Typography>
                    <Box
                        
                        >                    
                        <Image  
                            src="/images/eu.png"
                            alt="Developer"
                            width={350}
                            height={350}
                            style={{borderRadius: '10px / 5px',position: 'absolute', top: '7%', right: '5%'}}
                        />
                    </Box> 
                </Box>

                {
                    
                }
            </Container>
        </>
    )
}

export default About