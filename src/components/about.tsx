import { Container, Box, Typography } from "@mui/material";
import styled from 'styled-components';

/*
import Image from "next/image";
 const StyledImage = styled(Image)`
    @media (max-width: 1100px) {
        width: 300px;
        right: 10%;
    }

    @media (max-width: 890px) {
        width: 300px;
        right: 10%;
        display: none;
    }
`;

    Adicionar uma imagem minha futuramente

*/

const StyledContainer = styled(Container)`
    @media (min-height: 550px) {
        
        display: flex;
        align-items: center;
        height: 100vh;
    }
`

const About = () => {
    return (
        <>
            <StyledContainer
                maxWidth='lg'
                sx={{ display: 'flex', marginTop: 5, paddingTop: 12 }}
                id="about"
            >
                <Box
                    sx={{
                        backgroundColor: '#25143a',
                        width: '100%',
                        borderRadius: '20px / 30px',
                        padding: '10px',
                        position: 'relative',
                        border: '1px solid #110122',
                        display: 'flex',
                        flexDirection: 'column', // Garantir que todos os elementos fiquem em coluna
                        justifyContent: 'center',
                        alignItems: 'flex-start', // Alinhamento padrão

                        // Centralização para telas menores
                        '@media (max-width: 880px)': {
                            alignItems: 'center',
                            textAlign: 'center',
                        }
                    }}
                >
                    <Typography 
                        component="h1"
                        fontSize={30} 
                        sx={{ 
                            color: 'white', 
                            fontWeight: 400, 
                            margin: '10px 0px 0px 20px',
                            '@media (max-width: 880px)': { margin: '10px 0' } // Centralizar o nome
                        }}
                    >
                        Arthur Bitencourt
                    </Typography>
                    <Typography 
                        component="h2" 
                        fontSize={20}
                        sx={{ 
                            color: 'gray', 
                            fontWeight: 300, 
                            margin: '0px 0 10px 19px',
                            '@media (max-width: 880px)': { margin: '0px 0 20px' } // Centralizar a stack
                        }}
                    >
                        Fullstack Developer
                    </Typography>
                    <Typography
                        component='h3'
                        variant='body2'
                        fontSize={17}
                        sx={{ color: 'white' }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#110122',
                                borderRadius: '10px / 20px',
                                width: '100%',
                                padding: 2,
                                border: '1px solid white',
                                // Remover altura fixa e permitir que a box cresça
                                minHeight: '100px', // Altura mínima para a box
                                maxWidth: '100%', // Para garantir que a box não ultrapasse o limite
                                '@media (max-width: 880px)': {
                                    width: '100%', // Ajustar a largura no modo responsivo
                                }
                            }}
                        >
                            <Typography
                                variant='h6'
                                component='h3'
                                fontWeight={200}
                                sx={{ marginLeft: '5px' }}
                            >
                                Resumo:
                            </Typography>
                            <Typography
                                variant='body1'
                                component='h3'
                                fontWeight={200}
                                sx={{ marginLeft: '5px', marginTop: 2 }}
                            >
                                Olá, sou Arthur Bitencourt Vieira Silva, tenho 17 anos e sou apaixonado por desenvolvimento web desde 2023. Ao longo desse tempo, me aprofundei tanto no frontend quanto no backend, trabalhando com ferramentas como React, Next.js, SCSS, HTML, CSS, além de bibliotecas de estilização. No backend, utilizo Node.js, MongoDB e sigo a arquitetura MVC. Atualmente, estou envolvido em alguns projetos pessoais, mas também estou disponível para trabalhos como freelancer. Se você está procurando um desenvolvedor dedicado e criativo, sinta-se à vontade para entrar em contato!
                            </Typography>
                        </Box>
                    </Typography>
                    
                </Box>
            </StyledContainer>
        </>
    );
}

export default About;
