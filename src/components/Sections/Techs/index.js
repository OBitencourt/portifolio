import { Container } from "@mui/material";
import { Info, TechsDiv, Title } from "./style";
import Tabs from "../../Tabs";
import Appear from "../../Animations/Appear";
import Tilt from "react-parallax-tilt";
import { Circle } from "../../Circle/style";

const Techs = () => {
  return (
    <>
      <section
        id="techs"
        style={{
          margin: "100px 0px",
          height: "150vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: 'relative'
        }}
      >
        <Circle size="200px" color="#9C60B6" top="10%" left="5%" />
        <Circle size="150px" color="#5C3E86" top="30%" left="80%" />
        <Circle size="300px" color="#9C60B6" top="70%" left="50%" />
     

        <Appear>
          <Title align="center" gutterBottom>
            My Techs
          </Title>
          <Container
            maxWidth="false"
            sx={{
              width: "90%",
              margin: "0 auto",
            }}
          >
            <Tilt
              tiltMaxAngleX={5} // Ajusta o ângulo máximo no eixo X
              tiltMaxAngleY={5} // Ajusta o ângulo máximo no eixo Y
              perspective={1200} // Controla a profundidade da perspectiva 3D
              transitionSpeed={1000} // Suaviza a animação
              glareEnable={true} // Ativa o efeito de brilho
              glareMaxOpacity={0.3} // Define a opacidade máxima do brilho
              glareColor="#ffffff"
              glarePosition="bottom"
            >
              <TechsDiv>
                <Info>
                  I build modern and scalable applications and sites using the
                  best technologies for each project. Click on a category to see
                  the tools I use.
                </Info>
                <Tabs></Tabs>
              </TechsDiv>
            </Tilt>
          </Container>
        </Appear>
      </section>
    </>
  );
};

export default Techs;
