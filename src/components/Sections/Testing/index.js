import { Container } from "@mui/material"
import { SecondTitle, StyledButton, Title } from "./style"

const Testing = () => {

    return (
        <>
            <section id="testing" style={{height: '100vh', display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
                <Title align="center">
                    Curious?
                </Title>
                <SecondTitle align="center">
                    Test it.
                </SecondTitle>
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
                    
                    <StyledButton>
                        Modals
                    </StyledButton>
                    <StyledButton>
                         Toasts
                    </StyledButton>
                    <StyledButton>
                         Popovers
                    </StyledButton>
                    <StyledButton>
                        Tooltips
                    </StyledButton>
                    
                </Container>
            </section>
        </>
    )
}

export default Testing