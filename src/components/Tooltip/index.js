import { useState } from "react"
import { Content, Trigger, Wrapper } from './style'

const Tooltip = ({children, text}) => {

    const [isHovered, setIsHovered] = useState (false)

    return (
        <>
            <Wrapper
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered (false)}
            >   
                <Trigger>
                    {children}
                </Trigger>
                {
                    isHovered && (
                        <Content
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {text}
                        </Content>
                    )
                }
            </Wrapper>
        </>
    )
}

export default Tooltip