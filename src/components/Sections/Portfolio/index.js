import Image from "next/image";
import { Content, GitButton, DeployButton, Title } from "./style";
import { Container } from "@mui/material";
import Appear from "../../Animations/Appear";
import Toast from "../../Toast";
import { useState } from "react";

const Portfolio = () => {
    const [active, setActive] = useState(false)

    const handleToast = () => {
        setActive(true)

        setTimeout(() => {
            setActive(false)
        }, 3000)
    }

  return (
    <>
        <Appear>

            <section id="portfolio" style={{ margin: "100px 0px" }}>
                <Title align="center">Portfolio</Title>
                <Container
                    maxWidth="false"
                    sx={{
                    width: "93%",
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: "50px",
                    }}
                >
                    <Content>
                    <div
                        style={{
                        backgroundColor: "white",
                        width: "100%",
                        height: "300px",
                        borderRadius: "8px",
                        }}
                    >
                        <Image 
                            src="/images/barbershop-print.png"
                            alt="barber-shop"
                            width={500}
                            height={300}
                            style={{width: '100%', height: '300px', borderRadius: "8px"}}
                        />
                    </div>

                    <div
                        style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                        marginTop: "24px",
                        }}
                    >
                        <DeployButton>
                            Deploy
                        </DeployButton>
                        <GitButton target="_blank">
                            See the code
                            <Image
                                alt="github"
                                width={50}
                                height={50}
                                src="/images/github-white.svg"
                                style={{ marginLeft: "12px" }}
                            />
                        </GitButton>
                    </div>
                    </Content>
                    <Content>
                    <div
                        style={{
                        backgroundColor: "white",
                        width: "100%",
                        height: "300px",
                        borderRadius: "8px",
                        }}
                    >
                        <Image 
                            src="/images/weblume-print.png"
                            alt="barber-shop"
                            width={500}
                            height={300}
                            style={{width: '100%', height: '300px', borderRadius: "8px"}}
                        />
                    </div>

                    <div
                        style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                        marginTop: "24px",
                        }}
                    >
                        <DeployButton>
                            Deploy
                        </DeployButton>
                        <GitButton target="_blank" href="https://github.com/OBitencourt/weblume">
                                See the code
                                <Image
                                    alt="github"
                                    width={50}
                                    height={50}
                                    src="/images/github-white.svg"
                                    style={{ marginLeft: "12px" }}
                                />
                        </GitButton>
                    </div>
                    </Content>
                    <Content>
                    <div
                        style={{
                        backgroundColor: "white",
                        width: "100%",
                        height: "300px",
                        borderRadius: "8px",
                        }}
                    >
                        <Image 
                            src="/images/vault-print.png"
                            alt="barber-shop"
                            width={500}
                            height={300}
                            style={{width: '100%', height: '300px', borderRadius: "8px"}}
                        />

                    </div>

                    <div
                        style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                        marginTop: "24px",
                        }}
                    >
                        <DeployButton onClick={handleToast}>
                            Deploy
                        </DeployButton>
                        <GitButton target="_blank" href="https://github.com/OBitencourt/vault">
                            See the code
                            <Image
                                alt="github"
                                width={50}
                                height={50}
                                src="/images/github-white.svg"
                                style={{ marginLeft: "12px" }}
                            />
                        </GitButton>
                    </div>
                    </Content>
                    <Content>
                    <div
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "300px",
                            borderRadius: "8px",
                        }}
                    >
                        <Image 
                            src="/images/listly-print.png"
                            alt="barber-shop"
                            width={500}
                            height={300}
                            style={{width: '100%', height: '300px', borderRadius: "8px"}}
                        />

                    </div>

                    <div
                        style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                        marginTop: "24px",
                        }}
                    >
                        <DeployButton onClick={handleToast}>
                            Deploy
                        </DeployButton>

                        <GitButton target="_blank" href="https://github.com/OBitencourt/listly">
                            See the code
                            <Image
                                alt="github"
                                width={50}
                                height={50}
                                src="/images/github-white.svg"
                                style={{ marginLeft: "12px" }}
                            />
                        </GitButton>
                    </div>
                    </Content>
                </Container>
            </section>
        </Appear>
        <Toast isActive={active} image={"unavailable-icon"} message="This project is not deployed yet!" />
    </>
  );
};

export default Portfolio;
