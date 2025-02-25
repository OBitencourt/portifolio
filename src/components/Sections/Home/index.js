import { Container } from "@mui/material"
import { MainButton, MainPhrase, Name, SecondaryButton } from "./style"
import Image from "next/image"
import FadeIn from "../../Animations/FadeIn"

const Home = () => {

    return(
        <>  
            <FadeIn>

                <section id="home" style={{height: '90vh'}}>

                    <Container
                        maxWidth='false'
                        sx={{margin: '130px auto', width: '92%'}}

                    >
                        <Name>
                            Hi, my name is Arthur Bitencourt,
                        </Name>
                        <MainPhrase>
                            I{"'"}m the <span> Fullstack</span> Developer That you <span>need.</span>
                        </MainPhrase>

                        
                        <div style={{backgroundColor: '#76328E', display: 'inline-flex', borderRadius: '100px', padding: '4px'}}>
                            <MainButton>
                                Download my CV
                            </MainButton>
                        </div>
                        <SecondaryButton>
                            See my Github

                            <Image 
                                src='/images/github.svg'
                                alt="github"
                                width={50}
                                height={50}
                                style={{marginLeft: '20px'}}
                            />
                        </SecondaryButton>
                        
                        <Image 
                            src='/images/home-images.png'
                            alt="projects"
                            width={200}
                            height={500}
                            style={{
                                width: '700px',
                                height: 'auto',
                                position: 'absolute',
                                top: '25%',
                                right: '10%',
                                opacity: '0.7',
                                zIndex: '-1'
                            }}
                        />
                    </Container>
                </section>
            </FadeIn>
        </>
    )
}


export default Home