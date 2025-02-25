import { Container } from "@mui/material"
import { Info, TechsDiv, Title } from "./style"
import Tabs from '../../Tabs'
import FadeIn from '../../Animations/FadeIn'

const Techs = () => {

    return (

        <>
            <FadeIn>
                <section id="techs" style={{margin: '100px 0px', height: '150vh', display: 'flex', flexDirection: 'column' ,justifyContent: 'center'}}>
                    <Title align="center" gutterBottom>
                        My Techs
                    </Title>
                    <Container
                        maxWidth='false'
                        sx={{
                            width: '93%',
                            margin: '0 auto'
                        }}
                    >
                        <TechsDiv>
                            <Info>
                                I build modern and scalable applications and sites using the best technologies for each project. Click on a category to see the tools I use.
                            </Info>
                            <Tabs></Tabs>
                        </TechsDiv>
                    </Container>
                </section>
            </FadeIn>
        </>
    )
}

export default Techs