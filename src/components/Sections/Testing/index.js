import { Container } from "@mui/material"
import { SecondTitle, StyledButton, Title } from "./style"
import Modal from "../../Modal"
import { useState } from "react"

const Testing = () => {

    const [ openModal, setIsOpenModal ] = useState(false)

    const handleModal = () => {
        setIsOpenModal(!openModal)
    }


    return (
        <>
            <section id="testing" style={{height: '100vh', display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
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
                    
                    <StyledButton onClick={() => handleModal()}>
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
                <Modal isActiveOrNot={openModal} closeModal={() => handleModal()} />
            </section>
        </>
    )
}

export default Testing