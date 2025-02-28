import { Container } from "@mui/material";
import { MainButton, MainPhrase, Name, SecondaryButton } from "./style";
import Image from "next/image";
import FadeIn from "../../Animations/FadeIn";
import { motion } from "framer-motion";
import { Circle } from "../../Circle/style";

const Home = () => {
  return (
    <>
      <section id="home" style={{ height: "90vh", position: "relative" }}>
        <Circle color="#9C60B6" size="400px" top="90%" left="10%" />
        <Circle color="#5C3E86" size="400px" top="100%" left="5%" />
        <Circle color="#9C60B6" size="400px" top="100%" left="90%" />

        <FadeIn>
          <Container
            maxWidth="false"
            sx={{ margin: "130px auto", width: "92%" }}
          >
            <Name>Hi, my name is Arthur Bitencourt,</Name>
            <MainPhrase>
              I{"'"}m the <span> Fullstack</span> Developer That you{" "}
              <span>need.</span>
            </MainPhrase>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  backgroundColor: "#76328E",
                  display: "inline-flex",
                  borderRadius: "100px",
                  padding: "4px",
                }}
              >
                <MainButton>Download my CV</MainButton>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <SecondaryButton>
                See my Github
                <Image
                  src="/images/github.svg"
                  alt="github"
                  width={50}
                  height={50}
                  style={{ marginLeft: "20px" }}
                />
              </SecondaryButton>
            </motion.button>
          </Container>
        </FadeIn>
      </section>
    </>
  );
};

export default Home;
