
import { Container } from "@mui/material"
import styled from 'styled-components'


const Card = styled.div`
    background-color: white;
    height: 150px;
    width: 100px;
`

const Techs = () => {
    return (
        <>
            <Container
                maxWidth='lg'
                sx={{height: '100vh'}}
                id="techs"
            >
                <Card>

                </Card>

            </Container>
        </>
    )
}


export default Techs