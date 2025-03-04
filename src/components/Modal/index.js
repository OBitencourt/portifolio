
import { Backdrop, Content, GotItButton, Info, Title } from "./style"

const Modal = ({ isActiveOrNot, closeModal }) => {


    return (

        <>   
            <Backdrop isActive={isActiveOrNot} onClick={closeModal}>
                <Content onClick={e => e.stopPropagation()}>
                    <Title>
                        Modals
                    </Title>
                    <Info>
                        Modals are UI components that appear on top of the main content, usually to display important information, confirm actions, or gather user input. They help keep the user focused by dimming the background while keeping the main interface accessible.    
                    </Info>
                    <div style={{display: 'flex', alignSelf: 'flex-end', marginTop: '16px', gap: '16px'}}>

                        <GotItButton onClick={closeModal}>
                            Got it!
                        </GotItButton>
                    </div>
                </Content>
            </Backdrop>
        </>
    )
}

export default Modal