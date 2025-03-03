import { Container } from "@mui/material"
import { SecondTitle, StyledButton, Title } from "./style"
import Modal from "../../Modal"
import { useState } from "react"
import Toast from "../../Toast"


const Testing = () => {

    const [ openModal, setIsOpenModal ] = useState(false)
    const [ active, setActive ] = useState(false)

    const handleModal = () => {
        setIsOpenModal(!openModal)
    }

    const handleToast = () => {
        setActive(true)

        setTimeout(() => {
            setActive(false)
        }, 3000)
    }



    return (
        <>
            <section id="testing" style={{height: '100vh', display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', position: 'relative', overflowX: 'hidden'}}>
                <Title align="center">
                    Curious?
                </Title>
                <SecondTitle align="center">
                    Test it.
                </SecondTitle>
                <Container
                    maxWidth='false'
                    sx={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '50px'
                    }}
                >
                    
                    <StyledButton onClick={() => handleModal()}>
                        Modals
                    </StyledButton>
                    <StyledButton onClick={() => handleToast()}>
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
                <Toast isActive={active} message="Toasts help with feedbacks" />
            </section>
        </>
    )
}

export default Testing