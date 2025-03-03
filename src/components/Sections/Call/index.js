import { Container } from "@mui/material";
import { MainTitle } from "./style";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Call = () => {
    const textParts = [
        "Your users",
        "are going to",
        "love it."
    ];

    return (
        <>
            <section style={{ paddingTop: "100px" }}>
                <Container maxWidth="false" sx={{ width: "93%" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {textParts.map((part, index) => (
                            <AnimatedText key={index} text={part} delay={index * 0.2} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

const AnimatedText = ({ text, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ 
                opacity: 0, 
                y: 200,
                scaleZ: 2,
                rotateX: 30
            }}
            animate={
                isInView ? 
                    { 
                        opacity: 1, 
                        y: 0,
                        scaleZ: 2,
                        rotateX: 0  
                    } 
                : 
                {}
            }
            transition={{ duration: 0.6, delay }}
            style={{
                perspective: 1000 // Perspectiva para efeito 3D mais forte
            }}
        >
            <MainTitle>{text}</MainTitle>
        </motion.div>
    );
};

export default Call;
