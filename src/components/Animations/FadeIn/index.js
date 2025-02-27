
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const FadeIn = ({ children }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
        <>
            {mounted && (

                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }} // Anima apenas quando entra na tela
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            )}
        </>
    )
}

export default FadeIn