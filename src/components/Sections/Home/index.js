import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { MainButton, MainPhrase, Name, SecondaryButton } from "./style";
import Image from "next/image";
import FadeIn from "../../Animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "../../Circle/style";

const Home = () => {
  const roles = ["Fullstack", "Frontend", "Backend"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <section id="home" style={{ height: "90vh", position: "relative" }}>
        <Circle color="#9C60B6" size="400px" top="90%" left="10%" />
        <Circle color="#5C3E86" size="400px" top="100%" left="5%" />
        <Circle color="#9C60B6" size="400px" top="100%" left="90%" />

        <FadeIn duration={1} y={100}>
          <Container maxWidth="false" sx={{ margin: "130px auto", width: "92%" }}>
            <Name>Hi, my name is Arthur Bitencourt,</Name>
            <MainPhrase>
              I{"'"}m the{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block" }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>{" "}
              Developer that you <span>need.</span>
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
        <FadeIn duration={2.5} y={0}>

          <Image 
            src="/images/byte-photo1.png"
            alt="byte-photo1"
            width={500}
            height={500}
            style={{
              width: "600px",
              height: "auto",
              position: "absolute",
              right: "10%",
              top: "20%",
              opacity: 0.7
            }}
          />
          <Image 
            src="/images/byte-photo2.png"
            alt="byte-photo1"
            width={500}
            height={500}
            style={{
              width: "600px",
              height: "auto",
              position: "absolute",
              right: "15%",
              top: "-5%",
              zIndex: '-1',
              opacity: 0.9
            }}
          />
          <Image 
            src="/images/boni-photo2.png"
            alt="byte-photo1"
            width={500}
            height={500}
            style={{
              width: "600px",
              height: "auto",
              position: "absolute",
              right: "30%",
              top: "35%",
              opacity: 0.7
            }}
          />
          <Image 
            src="/images/boni-photo1.png"
            alt="byte-photo1"
            width={500}
            height={500}
            style={{
              width: "600px",
              height: "auto",
              position: "absolute",
              right: "15%",
              top: "55%",
              opacity: 0.9
            }}
          />
        </FadeIn>
      </section>
    </>
  );
};

export default Home;
