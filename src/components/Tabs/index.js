import Image from "next/image"
import { ButtonsWrapper, Content, IconBox, TabButton } from "./style"
import { useState } from "react"
import { motion } from "framer-motion"

const Frontend = {
    next: {
        name: "next.svg"
    },
    react: {
        name: "react.svg"
    },
    html: {
        name: "html.svg"
    },
    css: {
        name: "css.svg"
    },
    sass: {
        name: "sass.svg"
    },
    js: {
        name: "js.svg"
    },
}

const Backend = {
    node: {
        name: "node.svg"
    },
    js: {
        name: "js.svg"
    },
    mongo: {
        name: "mongodb.svg"
    },
    api: {
        name: "api.svg"
    },
}

const Utils = {
    figma: {
        name: "figma.svg"
    },
    ux: {
        name: "user-experience.png"
    },
    ui: {
        name: "ui-design.png"
    }
}

const Tabs = () => {

    const [activeButton, setActiveButton] = useState("Frontend")

    const handleButtonClick = e => {
        const value = e.target.value
        setActiveButton(value)
    }
    
    console.log(activeButton)

    return (


        <>
            <Content>
                <ButtonsWrapper>
                    <TabButton $active={ activeButton === "Frontend" ? true : false} value="Frontend" onClick={(e) => handleButtonClick(e)}>
                        Frontend
                    </TabButton>
                    <TabButton $active={ activeButton === "Backend" ? true : false } value="Backend" onClick={(e) => handleButtonClick(e)}>
                        Backend
                    </TabButton>
                    <TabButton $active={ activeButton === "Utils" ? true : false} value="Utils" onClick={(e) => handleButtonClick(e)}>
                        Utils
                    </TabButton>
                </ButtonsWrapper>
                <div style={{paddingTop: '30px', display: 'flex', gap: "30px", flexWrap: 'wrap'}}>
                    {
                        activeButton === "Frontend" ? (
                            
                            Object.values(Frontend).map(item => {

                                return (

                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >

                                        <IconBox key={item.name}>
                                            <Image 
                                                key={item.name}
                                                src={`/images/${item.name}`}
                                                alt="image"
                                                height={55}
                                                width={55}
                                            />
                                        </IconBox>
                                    </motion.div>
                                )
                            })

                            
                        ) : activeButton === "Backend" ? (
                            Object.values(Backend).map(item => {

                                return (

                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <IconBox key={item.name}>
                                            <Image 
                                                key={item.name}
                                                src={`/images/${item.name}`}
                                                alt="image"
                                                height={55}
                                                width={55}
                                            />
                                        </IconBox>
                                    </motion.div>
                                )
                            })
                        ) : activeButton === "Utils" ? ( 
                            Object.values(Utils).map(item => {

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >

                                        <IconBox key={item.name}>
                                            <Image 
                                                key={item.name}
                                                src={`/images/${item.name}`}
                                                alt="image"
                                                height={55}
                                                width={55}
                                            />
                                        </IconBox>
                                    </motion.div>
                                )
                            })
                        ) : (<>Maybe a error happenned :/</>)
                        
                    }
                    
                </div>
            </Content>
        </>
    )
}

export default Tabs