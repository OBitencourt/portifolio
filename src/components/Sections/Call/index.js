import { Container } from "@mui/material"
import { MainTitle } from "./style"


const Call = () => {

    return (
        <>
            <section style={{paddingTop: '100px'}}>
                <Container
                    maxWidth='false'
                    sx={{width: '93%'}}
                >

                    <MainTitle>
                        Your users are going to love it.
                    </MainTitle>
                </Container>

            </section>
        </>
    )
}

export default Call