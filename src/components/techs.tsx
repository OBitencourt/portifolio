
import { Container, Grid, Typography } from "@mui/material"
import styled from 'styled-components'
import Image from "next/image"

const Card = styled.div`
    background-color: #110122;
    height: 260px;
    width: 240px;
    color: white;
    padding: 20px;
    text-align: center;
    border: 1px solid white;
    border-radius: 10px;

    h6 {
        text-align: start;
    }
    p {
        text-align: start;
    }
`

const Techs = () => {
    return (
        <>
            <Container
                maxWidth='lg'
                sx={{height: '100vh', padding: 3, marginBottom: 5}}
                id="techs"
            >
                <Grid spacing={3} container>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/react.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />

                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                React
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Uma biblioteca JavaScript amplamente usada para criar interfaces de usuário (UI) dinâmicas e interativas em aplicações web de forma eficiente, baseada em componentes.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/next-js.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                Next
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Um framework React que oferece renderização híbrida (SSR e SSG), roteamento simplificado, e funcionalidades avançadas como otimização de imagens e suporte a API routes.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/typescript-icon.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                TypeScript
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Um superconjunto de JavaScript que adiciona tipagem estática, ajudando a evitar erros e melhorando a manutenção de grandes projetos de software.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/node-js.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                Node
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Um ambiente de execução JavaScript server-side que permite o desenvolvimento de aplicações escaláveis e de alta performance.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/javascript-js.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                JavaScript
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Uma linguagem de programação amplamente utilizada para desenvolvimento web, que permite criar desde simples interações até complexas aplicações no lado do cliente e servidor.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/file-type-styled.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                Styled Components
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Uma biblioteca para React e React Native que permite escrever CSS dentro dos componentes JavaScript, promovendo estilos dinâmicos e melhor organização do código.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/material-ui.svg"
                                alt="Developer"
                                width={50}
                                height={50}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                Material UI
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Um conjunto de componentes React prontos e estilizados baseados nas diretrizes do Material Design, proporcionando uma UI consistente e moderna.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>

                        <Card>
                            <Image
                                src="../images/mongodb-original-wordmark.svg"
                                alt="Developer"
                                width={60}
                                height={60}
                            />
                            <Typography
                                align="center"
                                component='h1'
                                variant="h6"
                            >
                                MongoDB
                            </Typography>
                            <Typography
                                align="center"
                                component='p'
                                variant="body2"
                                fontSize={13}
                            >
                                Um banco de dados NoSQL orientado a documentos que utiliza JSON como formato de dados, ideal para lidar com grandes volumes de dados e aplicações escaláveis.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}


export default Techs