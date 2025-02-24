import { Container } from "@mui/material"
import { Info, TechsDiv, Title } from "./style"

const Techs = () => {

    return (

        <>
            <section id="techs" style={{margin: '100px 0px'}}>
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

                    </TechsDiv>
                </Container>
            </section>
        </>
    )
}

export default Techs