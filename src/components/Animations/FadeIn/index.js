
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const FadeIn = ({ children, duration, y }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
        <>
            {mounted && (

                <motion.div
                    initial={{ opacity: 0, y: y }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }} // Anima apenas quando entra na tela
                    transition={{ duration: duration, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            )}
        </>
    )
}

export default FadeIn