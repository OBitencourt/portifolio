import Image from 'next/image'
import { Content, GitButton, DeployButton, Title } from './style'
import { Container } from '@mui/material'
import motion from 'framer-motion'


const Portfolio = () => {

    return (

        <>
            
            <section id="portfolio" style={{margin: '100px 0px'}}>
                <Title align='center'>
                    Portfolio
                </Title>
                <Container
                    maxWidth='false'
                    sx={{
                        width: '93%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '50px'
                    }}
                >

                    <Content>
                        <div style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px'
                        }}>

                        </div>

                        <div style={{display: 'flex', width: '100%', justifyContent: 'end', marginTop: '24px'}}>
                            
                            <DeployButton>
                                Deploy
                            </DeployButton>
                            <GitButton>
                                See the code 
                                <Image 
                                    alt='github'
                                    width={50}
                                    height={50}
                                    src="/images/github-white.svg"
                                    style={{marginLeft: '12px'}}
                                />
                            </GitButton>
                        </div>
                    </Content>
                    <Content>
                        <div style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px'
                        }}>

                        </div>

                        <div style={{display: 'flex', width: '100%', justifyContent: 'end', marginTop: '24px'}}>
                            
                            <DeployButton>
                                Deploy
                            </DeployButton>
                            <GitButton>
                                See the code 
                                <Image 
                                    alt='github'
                                    width={50}
                                    height={50}
                                    src="/images/github-white.svg"
                                    style={{marginLeft: '12px'}}
                                />
                            </GitButton>
                        </div>
                    </Content>
                    <Content>
                        <div style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px'
                        }}>

                        </div>

                        <div style={{display: 'flex', width: '100%', justifyContent: 'end', marginTop: '24px'}}>
                            
                            <DeployButton>
                                Deploy
                            </DeployButton>
                            <GitButton>
                                See the code 
                                <Image 
                                    alt='github'
                                    width={50}
                                    height={50}
                                    src="/images/github-white.svg"
                                    style={{marginLeft: '12px'}}
                                />
                            </GitButton>
                        </div>
                    </Content>
                    <Content>
                        <div style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '300px',
                            borderRadius: '8px'
                        }}>

                        </div>

                        <div style={{display: 'flex', width: '100%', justifyContent: 'end', marginTop: '24px'}}>
                            
                            <DeployButton>
                                Deploy
                            </DeployButton>
                            <GitButton>
                                See the code 
                                <Image 
                                    alt='github'
                                    width={50}
                                    height={50}
                                    src="/images/github-white.svg"
                                    style={{marginLeft: '12px'}}
                                />
                            </GitButton>
                        </div>
                    </Content>
                </Container>
            </section>
        </>

    )
}


export default Portfolio